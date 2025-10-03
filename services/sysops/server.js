import express from 'express';
const app = express();
app.get('/healthz.json',(req,res)=>res.json({status:'ok'}));
app.listen(3000,()=>console.log('SysOps running on 3000'));
