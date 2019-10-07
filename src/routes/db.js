async function routes(fastify, options) {
  const collection = fastify.mongo.client.db('test').collection('test')

  await fastify.get('/search/:id', async (request, reply) => {
    const result = await collection.findOne({ id: parseInt(request.params.id) })
    console.log(JSON.stringify(result))
    if (result === null) {
      throw new Error('Invalid value')
    }
    return result
  })
}

module.exports = routes
