import 'dotenv/config'
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import fabricanteRoutes from './routes/fabricanteRoutes.js'
import clienteRoutes from './routes/clienteRoutes.js'
import categoriaRoutes from './routes/categoriaRoutes.js'
import categoriaProdutoRoutes from './routes/categoriaProdutoRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { connectDB, sequelize } from './config/database.js';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';
import { authMiddleware } from './middleware/AuthMiddleware.js';


const app = express();

app.use(express.json());

// rota api
//app.use(userRoutes); http://localhost:3000/user
app.use("/api", userRoutes); //http://localhost:3000/api/user
app.use("/api", produtoRoutes); //http://localhost:3000/api/produto
app.use("/api", fabricanteRoutes); //http://localhost:3000/api/fabricante
app.use("/api", clienteRoutes); //http://localhost:3000/api/cliente
app.use("/api", categoriaRoutes); //http://localhost:3000/api/categoria
app.use("/api", categoriaProdutoRoutes); //http://localhost:3000/api/categoriaProduto


// rota swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// rota auth
app.use("/auth", authMiddleware, authRoutes)

const start = async () => {
    await connectDB();
    await sequelize.sync();

    app.listen(process.env.PORT || 3000, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
        console.log(`http://localhost:${process.env.PORT || 3000}/docs`);
    });
};

start();
