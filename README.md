local module federation system

steps to run it:

1. run medusa dashboard in localhost:3000 ```docker run -p 3000:3000 -it scriptedalchemy/mf-dashboard:latest```
2. run `npm i` in each MFE application
```
cd ./app && npm i
cd ./button && npm i
cd ./home && npm i
cd ./library && npm i
cd ./modal && npm i
```
3. build each application to publish information to medusa dashboard **at this time it is empty**
```
cd ./app && npm run build && npm run cdnPublish
cd ./button && npm run build && npm run cdnPublish
cd ./home && npm run build && npm run cdnPublish
cd ./library && npm run build && npm run cdnPublish
cd ./modal && npm run build && npm run cdnPublish
```

4. check medusa dashboard: http://localhost:3000/applications/default/mfe0-test-app there should be info

5. start cdn 

```
cd ./cdn && npm i && npm run start
```

5. start cdn for "Production app"

```
cd ./cdn/prod && npm i && npm run start
```

6. start version control system BE and FE

```
cd ./sample-version-control-BE && npm i && npm run start
cd ./sample-version-control-FE && npm i && npm run start
```

Apps scrips

- `dowload-config` download MFE manifest for webpack configs will be done automatically before start/build
- `start` run local dev server with 2 way binding
- `build` build application
- `prepublishOnly` internal script that will compile code as an npm module. It will be used automatically before `npm publish`
- `deploy` script to build/compile app and publish to NPM CDN and dashboard
    

CC: There might be problems with npm while publishing new version (it is my own npm profile....)
parts:
- medusa dashboard: locahost:3000
- CDN: locahost:3020
- prod app: locahost:3022
- version controll BE: locahost:3010
- version controll FE: locahost:3009
- app: locahost:3001
- button: locahost:3003
- home: locahost:3002
- library: locahost:3005
- modal: locahost:3004

