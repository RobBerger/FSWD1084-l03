import express from 'express'

import routes from './routes/index';
import messageRoutes from './routes/messages';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/home', routes);
app.use('/messages', messageRoutes);

app.listen(3000);