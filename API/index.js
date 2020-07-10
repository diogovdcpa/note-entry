const express = require("express")
const server = express()
const router = express.Router()
const fs = require('fs');

server.use(express.json({extended:true}));

const readFile = ()=>{
    const content = fs.readFileSync('./data/base.json','utf-8')
    return JSON.parse(content)
}

const writeFile = (content)=>{
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./data/base.json',updateFile,'utf-8')
}

router.get("/",(req,res)=>{
    const content = readFile();
    res.send(content)
});

router.post("/",(req,res)=>{
    const {nota,fornecedor,valor,reponsavel} = req.body;
    const currentContent = readFile();
    const id = Math.random().toString(32).substr(2,9)
    currentContent.push({id,nota,fornecedor,valor,reponsavel})
    writeFile(currentContent)
    res.send({id,nota,fornecedor,valor,reponsavel})
});

router.put("/:id",(req,res)=>{
    const {nota,fornecedor,valor,reponsavel} = req.body;
    const {id} = req.params;
    const currentContent = readFile();
    const selectedItem = currentContent.findIndex((item)=>item.id === id)
    currentContent[selectedItem] = {id,nota,fornecedor,valor,reponsavel}
    res.send(currentContent);
});

router.delete("/",(req,res)=>{
    res.send("Ola Mundo");
});

server.use(router)

server.listen(3000,()=>{
    console.log("Servidor Rodando") 
})