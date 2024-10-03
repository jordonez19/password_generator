import express from 'express';
import router from './password/passwordRoutes.js';

const app = express();
const port = 3002
app.use(express.json());
app.use('/api', router)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

