
import { User } from "../entities/User";


export interface UserRepository{
    create(user:User):Promise<User>;
    findByEmail(email:string):Promise<User | null>;
    findById(id:string):Promise<User | null>;
    Update(id:string,user:Partial<User>):Promise<User | null>
    blockUser(id:string):Promise<void>;
}


