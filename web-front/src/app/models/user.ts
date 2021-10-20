export class User {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;

    constructor(username: string, password: string, email: string = "", isAdmin: boolean = false) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
