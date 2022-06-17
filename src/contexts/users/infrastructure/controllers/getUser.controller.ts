import { QueryBus } from '@leivaa/simple-cqrs';
import { Request, Response } from 'express';
import GetUserQuery from '../../application/GetUser/getUser.query';
import GetUserResponse from '../../application/GetUser/getUser.response';

export default async function getUserController(req: Request, res: Response) {
  const { id } = req.params;

  const QueryResponse = await QueryBus.dispatch<GetUserQuery, GetUserResponse>(
    new GetUserQuery(id)
  );
  const { user } = QueryResponse;
  res.status(200).send({
    status: 200,
    user: user.json,
  });
}
