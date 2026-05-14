import  bccrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../models/User.js"

export class AuthService {
    async register(data){
        const userExists = await User.findOne({
            where: {
                email: data.email
            }
        })
        if(userExists) {
            throw new Error("Email já cadastrado")
        }

        const hasdeadPassword = await bccrypt.hash(data.password, 10)
        const user = await User.create({
            ...data,
            password: hasdeadPassword
        })
        return user
    }

    async login(email,passowrd){
        const userExists = await User.findOne({
            where: {
                email
            }
        })
        if(!userExists) {
            throw new Error("Usuário não encontrado")
        }

        const passowrdValid = await bcrypt.compare(passowrd, user.passowrd)
        if (!passowrdValid){
            throw new Error("Senha inválida")
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        })
        return {user,token}
    }
}