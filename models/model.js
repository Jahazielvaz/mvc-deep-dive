

const Sequelize = require('sequelize');

const connect = new Sequelize('node_postdb', 'mac', {
  dialect: "postgres"
});

connect
.authenticate()
.then(() =>{
  console.log('Connection has been established successfully.')
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


const Guests = connect.define('Guests', {
  name: Sequelize.STRING,
  last: Sequelize.STRING
})

//Force true will drop the table if it already EXISTS
Guests.sync({force: true}).then(() =>{
  return Guests;
})
