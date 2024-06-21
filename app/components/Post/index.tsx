import React from 'react';
import Link from 'next/link';
import styles from './Post.module.scss';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

interface IPost {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export const Post: React.FC<IPost> = ({ id, title, description, imageUrl }) => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${id}`}>{title}</Link>
      </Typography>
      <Typography className="mt-10 mb-15">{description}</Typography>
      {imageUrl && <Image src={imageUrl} height={500} width={600} alt="Картинка к посту" />}
    </Paper>
  );
};
