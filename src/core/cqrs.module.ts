import { CQRSModule, CQRSModuleConfig } from '@leivaa/simple-cqrs';
import { CommandHandlers, QueryHandlers } from '../contexts/users/application';
import UserFactory from '../contexts/users/domain/UserFactory';
import InMemoryUserRepository from '../contexts/users/infrastructure/persistance/InMemoryUserRepository';

const config: CQRSModuleConfig = {
  QueryHandlers: [...QueryHandlers],
  CommandHandlers: [...CommandHandlers],
  Injectables: [InMemoryUserRepository, UserFactory],
};

CQRSModule(config);
