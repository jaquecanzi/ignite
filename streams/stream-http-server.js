import http from 'node:http'
import { Transform } from 'node:stream'

class InvertNumberStream extends Transform {
    _transform(chunk, callback, encoding) {
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed);

        callback(null, Buffer.from(String(transformed)))
    }
}

const server = http.createServer(async (req,res) => {
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()

    console.log(fullStreamContent)

    return res.end(fullStreamContent)
})

server.listen(3334)