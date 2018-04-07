"use strict";
const express = require("express");
let http = require("http");
let morgan = require("morgan");
let path = require("path");
let app = express();

app.use(morgan("short"));
let localpath = path.join(__dirname, "static");
app.use(express.static(localpath));
app.use((request, Response, next)=>{
    Response.status(404);
    Response.send("The File Node Found !");
});

http.createServer(app).listen(3000, ()=> console.log("My App Is Working Now "));
