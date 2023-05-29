export interface JwtResponse {
  dataUser: {
    id: number;
    username: string;
    email: string;
    roles: string;
    accessToken: string;
    expiresIn: string;
  }
}
