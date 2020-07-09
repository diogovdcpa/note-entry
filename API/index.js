const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs')

app.use(express.json());
app.use(router)

const readFile = ()=>{
    const content = fs.readFileSync('./data/base.json','utf-8')
    return content
}

app.get("/",(req,res)=>{
    const content = readFile();
    res.send(content)
});

app.post("/",(req,res)=>{
    res.send("Ola Mundo");
});

app.put("/",(req,res)=>{
    res.send("Ola Mundo");
});

app.delete("/",(req,res)=>{
    res.send("Ola Mundo");
});

app.listen(3000,()=>{
    console.log("Servidor Rodando") 
})