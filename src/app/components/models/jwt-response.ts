export interface JwtResponse {
    id: number;
    username: string;
    email: string;
    roles: string [];
    tokenType: string;
    accessToken: string;
    status: string;
}
