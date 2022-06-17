import { CommandBus } from '@leivaa/simple-cqrs';
import { Request, Response } from 'express';
import CreateUserCommand from '../../application/CreateUser/createUser.command';

export default async function createUserController(
  req: Request,
  res: Response
) {
  const { id, name } = req.body;
  if (id == undefined || name == undefined) {
    return res.status(400).send({
      statusCode: 400,
      message: 'Needed parameters were not given',
    });
  }
  await CommandBus.dispatch<CreateUserCommand, void>(
    new CreateUserCommand(id, name)
  );

  return res.status(201).send({
    statusCode: 201,
    message: 'User was created successly',
  });
}
