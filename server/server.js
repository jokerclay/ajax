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


//  JQuery

app.get('/jq', (request, response) => {
    // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send("Hello Jquery");
})

app.post('/jq', (request, response) => {
    let data = { 'name': 'clay' };
    // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send(data);
})

// ==== axios ====
app.all('/axios', (request, response) => {
    // let data = { 'name': 'clay' };
    // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('Hello');
})

// ==== fetch ====
app.all('/fetch', (request, response) => {
    // let data = { 'name': 'clay' };
    // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('Hello');
})

// ==== 验证 script 返回的应该是 js 代码才能解析 ====
app.all('/jsonp', (request, response) => {
    // response.send('Hello');
    // response.send("console.log('hello jsonp in server.js')");

    // 数据
    const data = {
        "name": "clay",
    }
    // 处理数据
    //      转为字符串
    let str =JSON.stringify(data);
    response.send(`handleData(${str})`);
})


// ==== 原生 jsonp 实践 校验 username ====
app.all('/username', (request, response) => {
    const data = {
        "invalid": "用户名不可用",
    }
    let str =JSON.stringify(data);
    response.send(`handleData(${str})`);
})


// ==== Jquery 中 使用 jsonp ====
app.all('/jq-jsonp', (request, response) => {
    const data = {
        "name": "clay",
        "age": 18,
    }

    // Jquery 中的固定的注册的 callback=?
    let cb = request.query.callback


    let str =JSON.stringify(data);
    response.send(`${cb}(${str})`);
})



app.listen(3000, () => {
    console.log('server started , listening on 3000 ...');
});








