import { UserDto, Gender } from '../../modules/users/dto/user.dto';

export const USER_SIGNUP: UserDto = {
  name: 'Renato',
  email: 'rnato.netoo@gmail.com',
  password: '123456',
  gender: Gender.MALE,
};
