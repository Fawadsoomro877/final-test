const express = require('express');
const poetryRouter = require('./routes/poetryRoutes');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/poetry', poetryRouter);

app.all('*', (req, res, next) => {
  next(`Can't find the ${req.originalUrl} on this server!`, 404);
});

module.exports = app;
