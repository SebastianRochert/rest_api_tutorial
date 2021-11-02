//console.log("hello world from our API");
import express from "express";
import config from 'config'

const port = config.get<number>('port');

const app = express();

app.listen(port, () => { //Tutorial said 1337 but this address is already in use
    console.log("App is running");
})
