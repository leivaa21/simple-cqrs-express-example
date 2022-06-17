import { QueryBus } from '@leivaa/simple-cqrs';
import { Request, Response } from 'express';
import GetAllUsersQuery from '../../application/GetAllUsers/getAllUsers.query';
import GetAllUsersResponse from '../../application/GetAllUsers/getAllUsers.response';

export default async function getAllUsersController(
  req: Request,
  res: Response
) {
  const QueryResponse = await QueryBus.dispatch<
    GetAllUsersQuery,
    GetAllUsersResponse
  >(new GetAllUsersQuery());

  const { users } = QueryResponse;

  res.status(200).send({
    status: 200,
    users: users.map((user) => user.json),
  });
}
