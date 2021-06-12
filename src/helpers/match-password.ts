import * as argon2 from 'argon2'

export enum MatchFlag {
  SIMPLE = 'simple',
  HASHED = 'hashed'
}

export const matchPassword = async (pass1: string, pass2: string, flag: MatchFlag): Promise<boolean> => {
  switch (flag) {
    case MatchFlag.SIMPLE:
      return pass1 === pass2
    case MatchFlag.HASHED:
      return await argon2.verify(pass1, pass2)
    default:
      return false
  }
}