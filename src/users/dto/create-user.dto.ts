import { IsNotEmpty, IsString, IsOptional, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class UserContactDto {
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone_number: string;

    @IsOptional()
    @IsString()
    fax?: string;

    @IsOptional()
    @IsString()
    linkedIn_url?: string;
}

class UserAddressDto {
    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    country: string;

    @IsNotEmpty()
    @IsString()
    zipcode: string;
}

class UserAcademicsDto {
    @IsNotEmpty()
    @IsArray({each: true})
    @IsString({ each: true })
    schools: string[];
}

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    profile_photo: string;

    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsString()
    dateOfBirth: string;

    @IsNotEmpty()
    @IsString()
    occupation: string;

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => UserContactDto)
    contact: UserContactDto;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => UserAddressDto)
    address: UserAddressDto;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => UserAcademicsDto)
    academics: UserAcademicsDto;
}
