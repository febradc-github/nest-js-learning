import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('{:isMarried}')
  getUsers(
    @Query() params: any,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, // Sequence is important, set default value before parsing the string to integer type using the ParseIntPipe.
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param: GetUsersParamDto) {  // You can use DTOs for Parameters for optional route parameters.
    let users = this.usersService.getAllUsers();

    if (params.gender !== undefined) {
      users = users.filter(user => user.gender === params.gender);
    }

    if (param.isMarried !== undefined) {
      users = users.filter(user => user.isMarried === param.isMarried);
    }

    return users;
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
    return 'A new user has been created!'
  }

  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {  // Use @nestjs/mapped-types to reuse the create user and only partial parts of the create user to use.
    this.usersService.updateUser(id, updateUserDto);
    return 'User has been updated!';
  }

}
