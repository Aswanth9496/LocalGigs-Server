
import { Request, Response } from "express";
import { SignUpUseCase } from "../../Use_Cases/User/SignupUseCase";
import { MongoUserRepository } from "../../../Infrastructure/repositories/MongoUserRepository";

import { JWTService } from "../../../Infrastructure/services/JWTService";

const userRepository = new MongoUserRepository();
const signUpUseCase = new SignUpUseCase(userRepository)
const jwtService = new JWTService();

export const signUpController = async (req:Request,res:Response)=>{

    try {
        const user = await signUpUseCase.execute(req.body)
        const payload = {userId:user.id,email:user.email}
        const accessToken = jwtService.generateAccessToken(payload)
        const refreshToken = jwtService.generateRefreshToken(payload)

        res.status(201).json({
            message: "Sign Up successful",
            user,
            accessToken,
            refreshToken
        })
        
    } catch (error:any) {
        res.status(400).json({ message: error.message })
    }
}
