import { Sequelize } from 'sequelize'

export const sequelize = new 
Sequelize("nome_db","usuario","senha", {
    host: "localhost",
    dialect: "mysql",
    logging: false
})

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Banco conectado com sucesso!")
    } catch (error) {
        console.log(`Erro ao conectar: ${error}`)
    }
};