const express = require('express');

const app = express();


app.get('/server', (request, response) => {
    // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send('Hello   ajax server');
})


app.listen(3000, () => {
    console.log('server started , listening on 3000 ...');
});