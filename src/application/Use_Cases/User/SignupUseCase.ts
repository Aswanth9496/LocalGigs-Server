

import { UserRepository } from "../../../Domain/repositories/UserRepository"
import { User } from "../../../Domain/entities/User";
import hashPassword from "../../../utils/hashPassword";


export class SignUpUseCase {
    constructor(private userRepository:UserRepository){}

    async execute(data:Omit<User,"id" | "isVerified" | "isBlocked">):Promise<User>{
        const existing = await this.userRepository.findByEmail(data.email)

        if(existing){
            throw new Error('Email already in use')
        }

        const HashedPassword = data.password?await hashPassword(data.password):undefined;

        const newUser:User ={
            ...data,
            password:HashedPassword,
            isBlocked:false,
            isVerified:false
        };

        return await this.userRepository.create(newUser);
    }
}
