import { IsAlphanumeric, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { Role } from '../model/user.model'

@InputType()
export class UserDto {
  @Field()
  @IsNotEmpty()
  @IsAlphanumeric()
  username: string

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @Field()
  @IsString()
  @MinLength(6)
  password: string

  @Field()
  @IsString()
  @MinLength(6)
  password_confirm: string

  @Field(() => Role)
  @IsEnum(Role)
  @IsOptional()
  role: Role
}