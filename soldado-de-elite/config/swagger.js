import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Soldado de Elite CRUD NODEJS",
            version: "1.0.0",
            description: "API para gerenciamento de CRUD NODEJS"
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "Servidor de desenvolvimento"
            }
        ]
    },
    apis: ["./routers/*.js"]

};

export const swaggerSpec = swaggerJSDoc(options)
// http://localhost:3000/docs/