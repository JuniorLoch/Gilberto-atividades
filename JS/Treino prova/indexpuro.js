const http = require('http');
const fs = require('fs');
const url = require('url');

var formidable = require('formidable');

const server = http.createServer((req,res)=>{
    file = (req.url=="/")?"/index.html":req.url;
    console.log(file);
});