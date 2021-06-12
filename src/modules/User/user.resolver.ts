import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Service } from 'typedi'
import { UserDto } from './dto/user.dto'
import { User } from './model/user.model'
import UserService from './user.service'

@Service()
@Resolver(() => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await this.userService.getUsers()
  }

  @Query(() => User)
  async user(@Arg('id') id: string): Promise<User | null> {
    return await this.userService.getUserById(id)
  }

  @Mutation(() => User)
  async createUser(@Arg('user') user: UserDto): Promise<User> {
    return await this.userService.createUser(user)
  }
}