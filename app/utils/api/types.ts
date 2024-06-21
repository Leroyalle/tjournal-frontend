import { OutputData } from '@editorjs/editorjs';

export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type ResponseUser = {
  createAt: string;
  email: string;
  fullName: string;
  id: number;
  password?: string;
  token: string;
  updatedAt: string;
};

export type CreatePostDto = {
  title: string;
  body: OutputData['blocks'];
};

export type ResponsePost = {
  title: string;
  body: string;
  tags?: string;
  createAt: string;
  id: number;
  description: string;
  imageUrl?: string;
  updatedAt: string;
  views: number;
};

export type TPosts = ResponsePost[];
