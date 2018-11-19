'use strict'

module.exports = function (fastify, opts, next) {
  fastify.get('/example', function (request, reply) {
    reply.send('this is an example')
  })

  fastify.get('/helloworld', function (request, reply) {
    reply.send('Hello World')
  })

  next()
}
