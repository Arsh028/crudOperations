import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly users = [
    {
      userId: 123,
      metadata: {
        age: 23,
        company: 'Bajaj',
      },
      name: 'arsh',
    },
    {
      userId: 124,
      metadata: {
        age: 23,
        company: 'purplle',
      },
      name: 'dilip',
    },
  ];

  createUser(request: any): any {
    const newUser = {
      userId: request.userId,
      metadata: {
        age: request.age,
        company: request.company,
      },
      name: request.name,
    };

    this.users.push(newUser);

    return newUser;
  }

  getUser(request: Record<string, string>): Record<string, string> {
    const user = this.users.find(
      (user) => user.userId === Number(request.userId),
    );
    if (!user) throw new Error('User not found');

    return { company: user?.metadata?.company };
  }

  updateUser(request: Record<string, string>): Record<string, string> {
    const requestedUserId = Number(request.userId);
    const requestedCompanyName = request.company;

    const user = this.users.find((user) => {
      return user.userId === requestedUserId;
    });
    if (!user) throw new Error('User not found');

    user.metadata.company = requestedCompanyName;

    return { company: user.metadata.company };
  }

  deleteUser(request: Record<string, string>): any {
    const requestedUserId = Number(request.userId);

    const userIndex = this.users.findIndex(
      (user) => user.userId === requestedUserId,
    );

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const deletedUser = this.users.splice(userIndex, 1);

    return { message: 'User deleted successfully', deletedUser };
  }
}
