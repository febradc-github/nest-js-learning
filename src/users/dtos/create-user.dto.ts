import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MinLength } from "class-validator";


export class CreateUserDto {
    static readonly MIN_PASSWORD_LENGTH = 8;


    @IsString({
        message: 'First name must be a string'
    })
    @IsNotEmpty({
        message: 'First name must not be empty'
    })
    @MinLength(3, {
        message: 'First name must be at least 3 characters long'
    })
    firstName: string;



    @IsString({
        message: 'Last name must be a string'
    })
    @IsNotEmpty({
        message: 'Last name must not be empty'
    })
    @MinLength(3, {
        message: 'Last name must be at least 3 characters long'
    })
    lastName: string;




    @IsString({
        message: 'Gender must be a string'
    })
    @IsOptional()
    gender: string;



    @IsEmail({}, {
        message: 'Please enter a valid email address'
    })
    email: string;




    @MinLength(CreateUserDto.MIN_PASSWORD_LENGTH, {
        message: `Password must be at least ${CreateUserDto.MIN_PASSWORD_LENGTH} characters long`
    })
    @IsStrongPassword({}, {
        message: 'Please enter a strong password'
    })
    password: string;

}
