import { Service } from 'typedi'
import UserRepository from './user.repository'
import { User } from './model/user.model'
import { Logger } from '../../config'

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
}