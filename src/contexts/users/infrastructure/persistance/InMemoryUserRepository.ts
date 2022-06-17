import { Injectable, InjectableConfig } from '@leivaa/simple-cqrs';
import User from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';

const config: InjectableConfig = {
  Dependencies: [],
};

@Injectable(config)
export default class InMemoryUserRepository implements UserRepository {
  public static readonly usersStored: Array<User> = new Array<User>();

  saveOne(user: User): void {
    InMemoryUserRepository.usersStored.push(user);
  }
  getOneByID(id: string): User {
    const userIndex = InMemoryUserRepository.usersStored.findIndex(
      (user: User) => user.id === id
    );
    if (userIndex === -1) {
      throw Error('User Not found');
    }
    const user = InMemoryUserRepository.usersStored[userIndex];
    return user;
  }
  getAll(): User[] {
    const users = InMemoryUserRepository.usersStored;
    return users;
  }
}
