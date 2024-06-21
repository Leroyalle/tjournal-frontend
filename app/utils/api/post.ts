import { AxiosInstance } from 'axios';
import { CreatePostDto, ResponsePost, TPosts } from './types';

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const data = await instance.get<TPosts>('/posts');
    return data;
  },

  async create(dto: CreatePostDto) {
    const data = await instance.post<TPosts, { data: ResponsePost }>('/posts', dto);
    return data;
  },
});
