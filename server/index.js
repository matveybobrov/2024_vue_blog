// Import the framework and instantiate it
import fastify from 'fastify'
const app = fastify({
  logger: true
})

// Declare a route
app.get('/', (request, response) => {
  response.status(201).send({hello: 'world'})
})

// Run the server!
const PORT = 3000
try {
  await app.listen({ port: PORT })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}