import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import UserService from '../services/user.service';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    if (!userCreated) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'dados inválidos' });
    }
    const token = jwt.sign({ userCreated }, 'minhasenhasupersecretasqn');

    res.status(StatusCodes.CREATED).json({ token });
  };
}
