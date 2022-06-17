import User from './User';

export interface UserRepository {
  saveOne(user: User): Promise<void> | void;
  getOneByID(id: string): Promise<User> | User;
  getAll(): Promise<User[]> | User[];
}
