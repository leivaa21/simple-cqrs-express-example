import User from '../../domain/User';

export default class GetAllUsersResponse {
  constructor(public readonly users: User[]) {}
}
