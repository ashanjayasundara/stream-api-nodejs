import express,{Request,Response} from 'express';
import dotenv from 'dotenv';



dotenv.config();
const application = express();

application.get('/api',(req:Request,res:Response)=>{
res.json({
    success:1,
    message:"Service end point is working",
})
});

application.listen(process.env.SERVER_PORT,()=>{
    console.log("Service is started on port "+process.env.SERVER_PORT);
})

