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
        return res.writeHead(201).end()
    }


    res.writeHead(404).end('NOT FOUND')
})

server.listen(3333)



