import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import userRouter from './routes/user.router';

export const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.use('/users', userRouter);

app.use('/', (error, req, res, next) => {
  res.status(500).send(error);
});

const port = process.env.PORT || 3000;

export const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);
