import express,{json} from 'express';
import { certiroute } from './Routes/certiroute.js';
import {router}from './Routes/Events.js'
const app =express();

app.use(json());
app.use('/',certiroute);
app.use('/events', router)

const port=8000;
app.listen(port,()=>{
    console.log(`server listen to the ${port}`)
})