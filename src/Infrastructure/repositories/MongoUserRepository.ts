
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { User } from "../../Domain/entities/User";
import UserSchema from "../models/UserSchema";



export class MongoUserRepository implements UserRepository {
    
    async create(user: User): Promise<User> {
        const created = await UserSchema.create(user)
        return created.toObject();
    }


    async findByEmail(email: string): Promise<User | null> {
        return await UserSchema.findOne({email}).lean()
    }

    async findById(id: string): Promise<User | null> {
        return await UserSchema.findById(id).lean()
    }


    async Update(id: string, user: Partial<User>): Promise<User | null> {
        return await UserSchema.findByIdAndUpdate(id,user,{new:true}).lean() 
    }


   async blockUser(id: string): Promise<void> {
        await UserSchema.findByIdAndUpdate(id,{isBlocked:true})
    }
};