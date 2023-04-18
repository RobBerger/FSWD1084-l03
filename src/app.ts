import express, { NextFunction, Request, Response } from 'express'

const app = express();

function helloWorld(req: Request, res: Response, next: NextFunction){
    res.send('Hello World')
}

function info(req: Request, res: Response, next: NextFunction){
    res.send('Server is running at port 3000');
}

app.use('/info', info);
app.use('/', helloWorld);

app.listen(3000);