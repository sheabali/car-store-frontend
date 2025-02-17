import { jwtDecode, JwtPayload } from 'jwt-decode';

// Define the expected structure of your token payload
interface DecodedToken extends JwtPayload {
  role?: string; // Ensure TypeScript recognizes this property
}

const verifyToken = (token: string): DecodedToken => {
  return jwtDecode<DecodedToken>(token);
};

export default verifyToken;
