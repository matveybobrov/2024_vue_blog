import express from 'express'
import mongoose from 'mongoose'
import checkAuth from './middlewares/checkAuth.js'

console.log('Connecting to database...')
try {
  await mongoose.connect('mongodb://localhost:27017/bloglist')
  console.log('Successfully connected to database!')
} catch(err) {
  console.log(err)
  process.exit()
}

const app = express()

app.use(express.json())
app.use(checkAuth)

app.get('/', (_req, res) => {
  res.json({hello: 'world'})
})

export default app