const express = require('express')
const cors = require('cors')
const netlifyCmsBackendFsMiddleware = require('netlify-cms-backend-fs/dist/fs')

const app = express()

const corsMiddleware = cors()
// app.use(cors({ credentials: true, origin: true }))
app.options('*', corsMiddleware)
app.use(corsMiddleware)

netlifyCmsBackendFsMiddleware(app)
app.use(express.static('public'))

// const bundler = new parcel('src/index.html')
// app.use(bundler.middleware());

app.listen(4242, () => console.log('Running'))
