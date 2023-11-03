const fetch = require('node-fetch');
const fs = require('fs')


fetch('http://localhost:3010/manifest').then(resp=>resp.json())
	.then(manifest=> {
		fs.writeFileSync('./webpack/manifest.json', JSON.stringify(manifest))
	})