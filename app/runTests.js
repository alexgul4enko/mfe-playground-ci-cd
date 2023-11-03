const fetch = require('node-fetch');
const fs = require('fs')
const pkgData = require('./package.json')
const { execSync } = require('child_process')


let version = ''
process.argv.forEach((arg)=>{
	if(arg.startsWith('--version')) {
		version = arg.split('=').pop()
	}
})

fetch(`http://localhost:3010/magic-manifest/${version}`).then(resp=>resp.json())
.then(manifest=> {
	const changes = Object.entries(manifest).reduce((res, [key, value]) => {
		if(key === pkgData.name) {
			if(Object.keys(value) === 1) {
				return res
			} 
			return Object.entries(value).reduce((res, [key, value])=>{
				if(pkgData.devDependencies[key] && pkgData.devDependencies[key] !== value){
					return {
						...res,
						[key]: value
					}
				}
				return res
			}, res)

		}
		if(pkgData.devDependencies[key] && pkgData.devDependencies[key] !== value.version){
			if(res[key]) {return res}
			return {
				...res,
				[key]: value.version
			}
		}
		return res
	}, {})
	const script = Object.entries(changes).reduce((res, [value, version])=>{
		return res + ` ${value}@${version}`
	},'npm i')
	execSync(`${script} --save-dev`)
	execSync(`npx tsc --project ./tsconfig.prod.json`)
})