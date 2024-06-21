'use client';
import React from 'react';
import Head from 'next/head';
import { Post } from './components/Post';
import { MainLayout } from './layouts/MainLayout';
import { Api } from './utils/api';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { postsSelector, setPostsData } from './redux/slices/posts';

export default function Home() {
  const dispatch = useAppDispatch();
  const postsData = useAppSelector(postsSelector);

  // FIXME: перенести в async actions
  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await Api().post.getAll();
        dispatch(setPostsData(data));
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Head>
        <title>RJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="style.css" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"></link>
      </Head>
      <MainLayout>
        {postsData &&
          postsData.map((obj) => (
            <Post
              key={obj.id}
              id={obj.id}
              title={obj.title}
              description={obj.description}
              imageUrl={obj.imageUrl}
            />
          ))}
      </MainLayout>
    </div>
  );
}
