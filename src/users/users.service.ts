import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor (@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) {} // Use forwardRef to handle circular dependency
  users: { id: number, name: string, email: string, gender: string, isMarried: boolean, password: string }[] =
    [
      { id: 1, name: 'John Doe', email: 'john@example.com', gender: 'male', isMarried: false, password: 'password1' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', gender: 'female', isMarried: true, password: 'password2' },
      { id: 3, name: 'Jim Doe', email: 'jim@example.com', gender: 'male', isMarried: true, password: 'password3' }
    ];

  getAllUsers() {
    if (!this.authService.isAuthenticated) {
      console.log("You are not authenticated. Please log in to view users.");
      return [];
    }
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  createUser(user: {name: string, email: string, gender: string, isMarried: boolean, password: string}) {
    const newUser = {
      id: this.users.length + 1,
      ...user
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updatedFields: Partial<{ name: string; email: string; gender: string; isMarried: boolean; password: string }>) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    this.users[userIndex] = { ...this.users[userIndex], ...updatedFields };
    return this.users[userIndex];
  }
}
