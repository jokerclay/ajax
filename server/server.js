const express = require('express');

const app = express();


// app.get('/server', (request, response) => {
// 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*');

//     response.send('Hello   ajax server');
// })

// app.post('/server', (request, response) => {
//     设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     response.send('Hello ajax server POST');
//     response.setHeader('Access-Control-Allow-Headers', '*');
// })

// 设置接收任意的请求
app.all('/server', (request, response) => {
    // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('Hello ajax server POST');
})

let data = {
    "name": "clay",
    "age": "18"
}
let output = JSON.stringify(data);

app.get('/server-json', (request, response) => {
    // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send(data);
})

app.get('/ie', (request, response) => {
    // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send("Hello IE - 4");
})


app.get('/timeout', (request, response) => {
    // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        response.send("Hello timeout, I come here after 2 sec ...");
    }, 2000)
})


app.listen(3000, () => {
    console.log('server started , listening on 3000 ...');
});