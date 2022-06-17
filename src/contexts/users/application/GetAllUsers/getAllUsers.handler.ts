import {
  IQueryHandler,
  QueryHandler,
  QueryHandlerConfig,
} from '@leivaa/simple-cqrs';
import { UserRepository } from '../../domain/UserRepository';
import InMemoryUserRepository from '../../infrastructure/persistance/InMemoryUserRepository';
import GetAllUsersQuery from './getAllUsers.query';
import GetAllUsersResponse from './getAllUsers.response';

const config: QueryHandlerConfig = {
  Query: GetAllUsersQuery,
  Dependencies: [InMemoryUserRepository],
};

@QueryHandler(config)
export default class GetAllUsersQueryHandler
  implements IQueryHandler<GetAllUsersQuery, GetAllUsersResponse>
{
  constructor(private readonly repository: UserRepository) {}
  async handle(): Promise<GetAllUsersResponse> {
    const users = await this.repository.getAll();
    const response: GetAllUsersResponse = new GetAllUsersResponse(users);
    return response;
  }
}
