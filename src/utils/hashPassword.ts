
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10;



//Hashes a plain password 
export default async function hashPassword(Password:string):Promise<string>{

    return bcrypt.hash(Password,SALT_ROUNDS);
};




