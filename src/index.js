const fastify = require('fastify')({
  // logger: true,
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// fastify.register(require('./connectors/mongodb'), {
//   url: 'mongodb://localhost:27017/',
// })

fastify.register(require('fastify-mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,

  url: 'mongodb://localhost:27017/',
})

fastify.register(require('./routes/route'))
fastify.register(require('./routes/db'))

const start = async () => {
  try {
    await fastify.listen(3001)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
