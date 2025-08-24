

import bcrypt from 'bcrypt';


export default async function comparePassword( 
    plainPassword: string,
    hashedPassword: string

    ):Promise<Boolean>{    
        return bcrypt.compare(plainPassword,hashedPassword);
};
