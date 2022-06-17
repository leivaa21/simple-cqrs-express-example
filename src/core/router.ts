import { Router } from 'express';
import createUserController from '../contexts/users/infrastructure/controllers/createUser.controller';
import getAllUsersController from '../contexts/users/infrastructure/controllers/getAllUsers.controller';
import getUserController from '../contexts/users/infrastructure/controllers/getUser.controller';

const router = Router();

router.get('/users', getAllUsersController);
router.get('/user/:id', getUserController);
router.post('/users', createUserController);

export default router;
