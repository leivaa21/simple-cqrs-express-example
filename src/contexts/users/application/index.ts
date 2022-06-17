import CreateUserCommandHandler from './CreateUser/createUser.handler';
import GetAllUsersQueryHandler from './GetAllUsers/getAllUsers.handler';
import GetUserQueryHandler from './GetUser/getUser.handler';

export const CommandHandlers = [CreateUserCommandHandler];
export const QueryHandlers = [GetUserQueryHandler, GetAllUsersQueryHandler];
