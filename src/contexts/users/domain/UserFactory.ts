import { Injectable, InjectableConfig } from '@leivaa/simple-cqrs';
import User from './User';

const config: InjectableConfig = {
  Dependencies: [],
};

@Injectable(config)
export default class UserFactory {
  create(id: string, name: string): User {
    return new User(id, name);
  }
}
