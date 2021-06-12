import { Field, ObjectType, registerEnumType } from 'type-graphql'
import { ObjectId } from 'mongodb'
import { index, prop } from '@typegoose/typegoose'

export enum Role {
  ADMIN = 'admin',
  USER = 'user'
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User permissions role'
})

@ObjectType()
@index({ username: 1, email: 1 }, { unique: true })
export class User {
  @Field()
  readonly _id: ObjectId

  @prop({ required: true, lowercase: true })
  @Field()
  username: string

  @prop({ required: true })
  @Field()
  email: string

  @prop({ required: true, select: false })
  @Field()
  password: string

  @prop({ default: Date.now })
  @Field(() => Date)
  createdAt: Date

  @prop({ default: true })
  @Field()
  active: boolean

  @prop({ enum: Role, default: Role.USER })
  @Field(() => Role)
  role: Role
}