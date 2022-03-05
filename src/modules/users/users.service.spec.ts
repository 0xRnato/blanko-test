import { Test, TestingModule } from '@nestjs/testing';

import { UsersService } from './users.service';

import { USER_DATA } from '../../../test/mock/data';
import { USER_REPOSITORY } from '../../core/constants';
import { User } from './user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let model: User;

  beforeEach(async () => {
    const modRef: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: USER_REPOSITORY,
          useValue: {
            findAll: jest.fn(() => [USER_DATA]),
            findOne: jest.fn(), // TODO: move mock for a separated file in /test folder and more complex
            create: jest.fn(() => USER_DATA),
          },
        },
      ],
    }).compile();

    service = modRef.get<UsersService>(UsersService);
    model = modRef.get<User>(User);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
