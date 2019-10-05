async function routes(fastify, options) {
  fastify.get('/hello', async (request, reply) => {
    return { hello: `Hello ${request.query.name}` }
  })
}

module.exports = routes
