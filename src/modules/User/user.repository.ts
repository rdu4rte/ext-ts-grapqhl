import { getModelForClass } from '@typegoose/typegoose'
import { Service } from 'typedi'
import { User } from './model/user.model'

export const UserModel = getModelForClass(User)

@Service()
export default class UserRepository {
  async fetchUsers(): Promise<User[]> {
    return await UserModel.find()
  }

  async getUserById(id: string): Promise<User | null> {
    return await UserModel.findById(id)
  }
}