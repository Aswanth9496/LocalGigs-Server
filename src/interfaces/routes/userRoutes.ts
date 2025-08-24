
import { Router } from "express";


import { signUpController } from "../../application/controllers/Users/UserController";

const router = Router();


router.post('/SignUp',signUpController);


export default router;

