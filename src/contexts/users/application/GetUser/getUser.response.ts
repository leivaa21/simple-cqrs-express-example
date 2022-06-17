import User from '../../domain/User';

export default class GetUserResponse {
  constructor(public readonly user: User) {}
}
