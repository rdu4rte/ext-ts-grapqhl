import { Service } from 'typedi'
import UserRepository from './user.repository'
import { User } from './model/user.model'
import { Logger } from '../../config'
import { UserDto } from './dto/user.dto'
import { hashPassword, MatchFlag, matchPassword } from '../../helpers'

@Service()
export default class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  public async getUsers(): Promise<User[]> {
    return await this.userRepository.fetchUsers()
  }

  public async getUserById(id: string): Promise<User | null> {
    try {
      const user = await this.userRepository.getUserById(id)
      return user
    } catch (err) {
      Logger.error(`user not found by Id ${id}`)
      throw new Error(`failed to get user by Id ${id}`)
    }
  }

  public async createUser(data: UserDto): Promise<User> {
    const { username, email, password, password_confirm, role } = data
    const newUser = new User()

    const matchPasswords = await matchPassword(password, password_confirm, MatchFlag.SIMPLE)
    if (!matchPasswords) {
      throw new Error('Passwords dont match')
    }

    newUser.username = username
    newUser.email = email
    newUser.password = await hashPassword(password)
    role ? newUser.role = role : null

    return await this.userRepository.create(newUser)
  }
}