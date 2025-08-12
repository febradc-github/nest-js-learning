import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(() => UsersService)) private readonly usersService: UsersService) {} // Use forwardRef to handle circular dependency

    isAuthenticated: boolean = false;

    login(email: string, password: string) {
        const user = this.usersService.users.find(user => user.email === email && user.password === password);
        if (!user) {
            this.isAuthenticated = false;
            return { message: 'Invalid email or password' };
        }
        this.isAuthenticated = true;
        return { message: 'User logged in successfully', token: "MyToken" };
    }
}
