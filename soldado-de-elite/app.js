import 'dotenv/config'
import express from 'express';
import soldadoRoutes from "./routers/soldadoRouters.js"
import {connectDB, sequelize} from './config/database.js'
import { swaggerSpec } from './config/swagger.js';
import swaggerUi from 'swagger-ui-express';

const app = express()

app.use(express.json())

// rota api
app.use("/api", soldadoRoutes)

// rota swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const start = async () => {
    await connectDB()
    await sequelize.sync()
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT}`)
        console.log(`Acesse a documentação em http://localhost:${process.env.PORT || 3000}/docs`)
    })
}

start()