const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then(() => console.log('DB is connected'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => console.log('Server has been started'));
