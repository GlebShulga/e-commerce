import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'
import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

const { readFile, writeFile, unlink } = require('fs').promises

const Root = {}
// const { default: Root } = require('../dist/assets/js/ssr/root.bundle')

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.get('/api/v1/rates', (req, res) => {
  axios
    .get('https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,CAD,RUB,USD')
    .then(({ data }) => res.json(data.rates))
})

server.get('/api/v1/data', (req, res) => {
  readFile(`${__dirname}/data/data.json`, { encoding: 'utf8' }).then((data) =>
    res.json(JSON.parse(data))
  )
})

server.post('/api/v1/log', async (req, res) => {
  const newLog = req.body
  await readFile(`${__dirname}/data/log.json`, { encoding: 'utf8' })
    .then((oldLogs) => {
      const parsedLogs = JSON.parse(oldLogs)
      writeFile(`${__dirname}/data/log.json`, JSON.stringify([...parsedLogs, newLog]), {
        encoding: 'utf8'
      })
    })
    .catch(async () =>
      writeFile(`${__dirname}/data/log.json`, JSON.stringify([newLog]), {
        encoding: 'utf8'
      })
    )
  res.json({ status: 'ok' })
})

server.get('/api/v1/log', (req, res) => {
  readFile(`${__dirname}/data/log.json`, { encoding: 'utf8' }).then((data) =>
    res.json(JSON.parse(data))
  )
})

server.delete('/api/v1/log', (req, res) => {
  unlink(`${__dirname}/data/log.json`)
  res.end()
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
