import {FC, useEffect, useState} from 'react';
import { TableRow, TableBody, Table, TableCell, Select, MenuItem, TableHead, Button,Snackbar, Alert  } from '@mui/material';
import { LoadingButton } from '@mui/lab';
type MetaData = {
  name: string,
  value: string
}


type Versions = {
  version: string,
  latest: boolean,
    consumes?: {application: {name: string}}[]
}

type MedusaTypes = {
  meta?: MetaData[];
  versions?: Versions[];

}

type VC = Record<string, MedusaTypes>

type Schema = Record<string, {
  version:  "1.0.11",
  [key: string]: string
}>

const queryBody = {
    variables: {
        environment: 'development',
        group: 'default',
    },
    query: 'query ($group: String!, $environment: String!) {\n  groups(name: $group) {\n    applications {\n      id\n      name\n      versions(latest: true, environment: $environment) {\n        modules {\n          id\n          name\n          requires\n          __typename\n        }\n        overrides {\n          id\n          name\n          version\n          __typename\n        }\n        consumes {\n          application {\n            id\n            name\n            __typename\n          }\n          name\n          usedIn {\n            file\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n',
}


function loadData() {
    return Promise.all([
        fetch('http://localhost:3000/api/graphql', {
            method: 'POST',
            body: JSON.stringify({
                variables: {
                    environment: 'development',
                    group: 'default',
                    name: ''
                },
                query: `query ($name: String!, $group: String!, $environment: String!) {
                                  groups(name: $group) {
                                    applications(id: $name) {
                                      id
                                      name
                                      metadata {
                                        name
                                        value
                                      }
                                      versions(environment: $environment) {
                                        version
                                        latest
                                        consumes {
                                            application {
                                              name
                                            }
                                        }
                                        __typename
                                      }
                                      __typename
                                    }
                                    __typename
                                  }
                                }
                                `,
            }),
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        }).then(res=>res.json())
            .then((data: any)=> {
                return data?.data?.groups[0]?.applications.reduce((res: any, app: any) => {
                    return {
                        ...res,
                        [app.name]: {
                            meta: app.metadata,
                            versions: app.versions,
                        } as MedusaTypes
                    }
                }, {} as VC) as VC
            }),

        fetch('http://localhost:3010/manifest').then(resp=>resp.json() as Promise<Schema>),
    ])
}

export const App: FC = () => {
    const [schema, setSchema] = useState<Schema>({})
    const [medusaData, setMedusaData] = useState<VC>({})
    const [magicLink, setmagicLink] = useState('')
    const [loading, setLoading] = useState<boolean>(false)
    const [alert, setAlert] = useState<undefined | {type: "success" | "info" | "warning" | "error", message: string}>()
  useEffect(()=>{
      loadData().then((data)=>{
               setMedusaData(data[0])
                 setSchema(data[1])
      })
  },[])

    const getMagicLink = () => {
        fetch('http://localhost:3010/magic-link', {
            method: 'POST',
            body: JSON.stringify(schema),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((data: {name: string}) => {
                setmagicLink(`http://localhost:3022?manifest=${data.name}`)
            })
    }

    const publish = () => {
        setLoading(true)
        fetch('http://localhost:3010/manifest', {
            method: 'POST',
            body: JSON.stringify(schema),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                    return Promise.all([res, res.json()])
            })
            .then(([res, data])=>{
                if(!res.ok) {
                    return Promise.reject(data)
                }
                setAlert({type: 'success', message: 'Success publish to production'})
                loadData().then((data)=>{
                    setMedusaData(data[0])
                    setSchema(data[1])
                })
            })
            .catch(err=> {
               setAlert({type: 'error', message: err?.message || 'There was a TS errors, can not puplish to prod'})
            })
            .finally(()=>{
            setLoading(false)
        })
    }

  return (
    <div style={{margin: '20px 48px'}}>
        <h1>Module federation version control tool</h1>
        <h2>Global versions</h2>
        <Table>
            <TableBody>
            {
                Object.entries(schema).map(([key, value])=>{
                    return (
                        <TableRow key={key}>
                            <TableCell>{key}</TableCell>
                            <TableCell>
                                <Select
                                value={value.version}
                                onChange={event=>{
                                    const value = event.target.value
                                    setmagicLink('')
                                    var a = JSON.parse(JSON.stringify(schema))
                                    a[key].version = value
                                    setSchema(a)
                                }}
                            >
                                {
                                    medusaData[key]?.versions?.map((version)=>{
                                        return (
                                            <MenuItem key={version.version} value={version.version}>{version.version}</MenuItem>
                                        )
                                    })
                                }
                                </Select>
                            </TableCell>
                        </TableRow>
                    )
                })
            }
            </TableBody>
        </Table>
        <h2>Versions by app</h2>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell/>
                    {
                        Object.entries(schema).map(([key])=>{
                            return (

                                    <TableCell key={key}>{key}</TableCell>

                            )
                        })
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    Object.entries(schema).map(([coll, value])=>{
                        const consumes = medusaData[coll]?.versions?.find(item=>{
                            return item.version === value.version
                        })


                        return (
                            <TableRow key={coll}>
                                <TableCell key={coll}>{coll}</TableCell>
                                {
                                    Object.entries(schema).map(([row])=>{
                                        if(consumes?.consumes && consumes.consumes.findIndex((item)=>{
                                            return item.application.name === row
                                        }) < 0 || row === 'mfe0-test-app' ) {
                                            return ( <TableCell key={row} style={{background: '#ccc'}}></TableCell>)
                                        }
                                        // @ts-ignore
                                        const isSingleton =medusaData && medusaData[row] && Array.isArray(medusaData[row]?.meta) && medusaData[row].meta.findIndex((item)=> item.name === 'singleton' && item.value === 'true') >=0
                                        if(isSingleton){
                                            return ( <TableCell key={row} style={{background: '#ccc'}}></TableCell>)
                                        }
                                        return (

                                            <TableCell key={row}>
                                                <Select
                                                    value={schema[coll][row]}
                                                    onChange={event=>{
                                                        setmagicLink('')
                                                        const value = event.target.value

                                                        var a = JSON.parse(JSON.stringify(schema))
                                                        if(value) {
                                                            a[coll][row] = value
                                                        } else {
                                                            delete a[coll][row]
                                                        }

                                                        setSchema(a)
                                                    }}
                                                >
                                                    <MenuItem  value={""}>None</MenuItem>
                                                    {
                                                        medusaData[row]?.versions?.map((version)=>{
                                                            return (
                                                                <MenuItem key={version.version} value={version.version}>{version.version}</MenuItem>
                                                            )
                                                        })
                                                    }
                                                </Select>
                                            </TableCell>

                                        )
                                    })
                                }
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
        <div style={{marginTop: 24, marginBottom: 48}}>
            {magicLink && <h3>{magicLink}</h3>}
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                <Button color={"primary"} variant="contained" onClick={getMagicLink}>Get Preview Magic Link</Button>
                <LoadingButton color={"primary"} loading={loading} disabled={loading} variant="contained" onClick={publish}>Publish to production</LoadingButton>
            </div>

        </div>

        <Snackbar open={Boolean(alert)} autoHideDuration={5000} onClose={()=>{setAlert(undefined)}} anchorOrigin={{vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={() => setAlert(undefined)} severity={alert?.type} sx={{ width: '100%' }}>
                {alert?.message}
            </Alert>
        </Snackbar>
    </div>
  );
};

export default App
