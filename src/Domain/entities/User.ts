

export interface User {
  id?: string;
  userName: string;
  email: string;
  password?: string;
  googleId?:string
  isVerified:boolean
  isBlocked:boolean
  profileImage?:string
  address?:string
}


