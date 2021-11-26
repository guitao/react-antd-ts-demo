const {
  app
} = require('./connect.js')

const user = require('./user/index')

app.use('/user', user);

const port = 3333;

app.listen(port, () => {
  console.log(`Sever running in ${port}`);
});