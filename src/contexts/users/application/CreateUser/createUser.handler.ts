import {
  CommandHandler,
  CommandHandlerConfig,
  ICommandHandler,
} from '@leivaa/simple-cqrs';
import UserFactory from '../../domain/UserFactory';
import { UserRepository } from '../../domain/UserRepository';
import InMemoryUserRepository from '../../infrastructure/persistance/InMemoryUserRepository';
import CreateUserCommand from './createUser.command';

const options: CommandHandlerConfig = {
  Command: CreateUserCommand,
  Dependencies: [InMemoryUserRepository, UserFactory],
};

@CommandHandler(options)
export default class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly repository: UserRepository,
    private readonly factory: UserFactory
  ) {}
  async handle(command: CreateUserCommand): Promise<void> {
    const { id, name } = command;
    const user = this.factory.create(id, name);
    await this.repository.saveOne(user);
  }
}
