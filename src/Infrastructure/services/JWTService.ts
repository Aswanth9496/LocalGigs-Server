
import { TokenService } from "../../Domain/services/TokenService";
import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "access_secret";
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "refresh_secret";
const ACCESS_TOKEN_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES
const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES

export class JWTService implements TokenService {

  generateAccessToken(payload: object): string {
    return jwt.sign(payload, ACCESS_SECRET, { expiresIn: "15m" });
  }

  
  generateRefreshToken(payload: object): string {
    return jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });
  }


  verifyAccessToken(token: string): object | null {
    try {
      return jwt.verify(token, ACCESS_SECRET) as object;
    } catch {
      return null;
    }
  }


  verifyRefreshToken(token: string): object | null {
    try {
      return jwt.verify(token, REFRESH_SECRET) as object;
    } catch {
      return null;
    }
  }
}

