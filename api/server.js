
import userRoutes from './routes/users.js';
import express from 'express';

const app = express();

app.use(express.json());
// app.use(cors());


app.use('/', userRoutes)

app.listen(8000, ()=>{
     console.log("Server running on port 8000");
});
