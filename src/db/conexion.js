import  Sequelize  from "sequelize";

export const sequelizee = new Sequelize(
    "agenda", // db name,
    "root", // username
    "", // password
    {
      host: "localhost",
      dialect: "mysql",
      // pool: {
      //   max: 5,
      //   min: 0,
      //   require: 30000,
      //   idle: 10000,
      // },
      // logging: false,
    }
  );
/*('proyectos','postgres','hola1234',{
    host:'localhost',
    dialect:'postgres'
});*/