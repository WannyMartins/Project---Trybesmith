import jwt, { SignOptions } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const options: SignOptions = {
  algorithm: 'ES256',
};

export default function createToken(user: User) {
  const token = jwt.sign({ user }, 'minhasenhasupersecretasqn', options);
  return token;
}
