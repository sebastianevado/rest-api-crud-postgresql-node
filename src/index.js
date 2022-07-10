const express = require('express');
const app = express();
const morgan = require('morgan');

const taskRoutes = require('./routes/task.routes');

app.use(morgan('dev'))
app.use(express.json());

app.use('/', taskRoutes);

app.listen(3000, () => {
  console.log(`Server running on http//localhost:${3000}`);
})

