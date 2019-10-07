async function routes(fastify, options) {
  // GET /hello?name=<ANY NAME>
  fastify.get('/hello', async (request, reply) => {
    return { hello: `Hello ${request.query.name}` }
  })
}

module.exports = routes
