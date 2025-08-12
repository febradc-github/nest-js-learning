import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MinLength } from "class-validator";


export class CreateUserDto {

    @IsString({
        message: 'Name must be a string'
    })
    @IsNotEmpty({
        message: 'Name must not be empty'
    })
    @MinLength(3, {
        message: 'Name must be at least 3 characters long'
    })
    name: string;




    @IsString({
        message: 'Gender must be a string'
    })
    @IsOptional()
    gender: string;



    @IsEmail({}, {
        message: 'Please enter a valid email address'
    })
    email: string;




    @MinLength(6, {
        message: 'Password must be at least 6 characters long'
    })
    @IsStrongPassword({}, {
        message: 'Please enter a strong password'
    })
    password: string;



    @IsBoolean({
        message: 'Married must be a boolean value'
    })
    isMarried: boolean;
}
