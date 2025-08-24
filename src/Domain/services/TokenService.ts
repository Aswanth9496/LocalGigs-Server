

export interface TokenService{
  generateAccessToken(payload: object): string;
  generateRefreshToken(payload: object): string;
  verifyAccessToken(token: string): object | null;
  verifyRefreshToken(token: string): object | null;
}