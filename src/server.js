import { log } from 'console'
import http from 'http'

const users = []


const server = http.createServer((req, res) => {
    const {method, url} = req

    if(method == 'GET' && url == '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if(method == 'POST' && url == '/users') {
        users.push({
            id: 1,
            name: "Jaqueline"
        })
        console.log(users);
        return res.end('Criado')
    }


    res.end('Hello ignite')
})

server.listen(3333)



