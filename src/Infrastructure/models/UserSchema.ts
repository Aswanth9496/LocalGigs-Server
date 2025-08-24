

import mongoose,{Schema,Document} from "mongoose";
import { User } from "../../Domain/entities/User";


const UserSchema = new Schema<User & Document>({
  userName: {type:String,required:true},
  email: {type:String,required:true},
  password: {type:String},
  googleId:{type:String},
  isVerified:{type:Boolean,default:false},
  isBlocked:{type:Boolean,default:false},
  profileImage:{type:String},
  address:{type:String},
})


export default mongoose.model<User & Document>("User",UserSchema);
