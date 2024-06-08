'use client';
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';
import { Comment } from '../../components/Comment';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { PostComments } from '@/app/components/PostComments';

export default function Post() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
