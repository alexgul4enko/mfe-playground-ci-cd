const express = require('express')
const app = express()
const port = 3010
const fs = require('fs')
var cors = require('cors');
const cp= require('child_process')

app.use(express.json())
app.use(cors())

app.get('/manifest', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('content-type', 'application/json; charset=utf-8');
  const json = JSON.parse(fs.readFileSync('./manifest.json', "utf8"))
  res.json(json)
})

function runScript(scriptPath, version, callback) {

    // keep track of whether callback has been invoked to prevent multiple invocations
    let invoked = false;

    let process = cp.fork(scriptPath, [`--manifestversion=${version}`]);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}

app.post('/manifest', (req, res) => {
  let data = req.body;
  const name = (new Date()).getTime()
  fs.writeFileSync(`./${name}.json`, JSON.stringify(data))
  var apps = ['button', 'home','modal', 'library']
  const results = []
  let errors = []
  try {
    apps.forEach((appName)=>{
      runScript(`../${appName}/runTests.js`, name, (err) => {
        if(err){
          res
            .status(400)
            .json({ message: `Opps TS errors in "${appName}"" app`})
        } else {
          results.push(appName)
          if(results.length === apps.length) {
            fs.writeFileSync(`./manifest.json`, JSON.stringify(data))
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('content-type', 'application/json; charset=utf-8');
            const json = JSON.parse(fs.readFileSync('./manifest.json', "utf8"))
            res.json(json)
          }
        }
      })
    })
  } catch (err){
    res
            .status(400)
            .json({ message: `oops TS check fails`})
  }
})

app.get('/magic-manifest/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('content-type', 'application/json; charset=utf-8');
  const json = JSON.parse(fs.readFileSync(`./${req.params.id}.json`, "utf8"))
  res.json(json)
})

app.post('/magic-link', (req, res) => {
  let data = req.body;

  const name = (new Date()).getTime()
  fs.writeFileSync(`./${name}.json`, JSON.stringify(data))
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('content-type', 'application/json; charset=utf-8');
  const json = JSON.parse(fs.readFileSync('./manifest.json', "utf8"))
  res.json({name})
})

app.get('/manifest.js', (req, res) => {
  const json = fs.readFileSync('./manifest.json', "utf8")

  res.setHeader('content-type', 'application/javascript; charset=utf-8');
  res.send(`(function(){
    window.manifest = ${json}
  })()`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

