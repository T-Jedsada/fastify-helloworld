'use strict'

module.exports = (fastify, opts, next) => {
    fastify.get('/helloworld', (request, reply) => {
        reply.send({message: 'Hello World'})
    })

    next()
}