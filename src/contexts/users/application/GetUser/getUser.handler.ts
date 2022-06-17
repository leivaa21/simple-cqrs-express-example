import {
  IQueryHandler,
  QueryHandler,
  QueryHandlerConfig,
} from '@leivaa/simple-cqrs';
import { UserRepository } from '../../domain/UserRepository';
import InMemoryUserRepository from '../../infrastructure/persistance/InMemoryUserRepository';
import GetUserQuery from './getUser.query';
import GetUserResponse from './getUser.response';

const config: QueryHandlerConfig = {
  Query: GetUserQuery,
  Dependencies: [InMemoryUserRepository],
};

@QueryHandler(config)
export default class GetUserQueryHandler
  implements IQueryHandler<GetUserQuery, GetUserResponse>
{
  constructor(private readonly repository: UserRepository) {}
  async handle(query: GetUserQuery): Promise<GetUserResponse> {
    const { id } = query;
    const user = await this.repository.getOneByID(id);
    const response: GetUserResponse = new GetUserResponse(user);
    return response;
  }
}
