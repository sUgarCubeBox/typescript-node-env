import * as Express from 'express';

const app: Express.Express = Express();

app.get(
    '/',
    (_: Express.Request, res: Express.Response) => {
        res.send('hello');
    },
)

app.listen(
    3000,
    () => console.log('running express server at port:3000'),
);

export default app;
