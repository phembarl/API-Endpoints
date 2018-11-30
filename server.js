// server.js
import express from 'express';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({"status" : 200, "data" : [{}]});
  res.status(404);
res.send('relevant error message');
})

app.listen(3000)
console.log('app running on port ', 3000);

import red_flag from './src/controllers/red_flag';

app.post('/api/v1/red_flags', red_flag.create);
app.get('/api/v1/red_flags', red_flag.getAll);
app.get('/api/v1/red_flags/:id', red_flag.getOne);
app.put('/api/v1/red_flags/:id', red_flag.update);
app.delete('/api/v1/red_flags/:id', red_flag.delete);
