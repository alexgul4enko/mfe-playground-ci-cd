const pkgData = require('./package.json')
const fs = require("node:fs")
const path = require("node:path")

const folderName = path.resolve('../cdn', `${pkgData.name}/${pkgData.version}`)

fs.mkdirSync(folderName, {recursive: true})

const files = fs.readdirSync('./build')
files.forEach(name=> {
	fs.copyFileSync(`./build/${name}`, `${folderName}/${name}`);
})
