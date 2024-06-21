import axios from 'axios';
import { parseCookies } from 'nookies';
import { UserApi } from './user';
import { PostApi } from './post';

export type TApi = {
  user: ReturnType<typeof UserApi>;
  post: ReturnType<typeof PostApi>;
};

export const Api = (): TApi => {
  const { authToken } = parseCookies();
  const instance = axios.create({
    baseURL: 'http://localhost:4444/',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return {
    user: UserApi(instance),
    post: PostApi(instance),
  };
};
