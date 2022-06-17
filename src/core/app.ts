import express from 'express';
import router from './router';

const app = express();
app.set('port', 3000);
app.use(express.json());

app.use(router);

app.listen(app.get('port'), () => {
  console.log(`Server up at http://localhost:${app.get('port')}`);
});
