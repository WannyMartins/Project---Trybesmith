import { Router } from 'express';

import UserController from '../controller/user.controller';

const UserRouter = Router();

const userController = new UserController();

UserRouter.post('/', userController.create);

export default UserRouter;
