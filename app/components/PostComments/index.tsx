import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import { Comment } from '../Comment';
import AddCommentForm from '../AddCommentForm';
import data from '../../../data.json';
export const PostComments: React.FC = () => {
  const [tabsValue, setTabsValue] = React.useState<number>(0);
  const comments = data.comments[tabsValue === 0 ? 'popular' : 'new'];

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setTabsValue(newValue)}
          value={tabsValue}
          className="mt-20"
          indicatorColor="primary"
          textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className="mb-20" />
        {comments.map((item) => (
          <Comment key={item.id} text={item.text} createdAt={item.createdAt} user={item.user} />
        ))}
      </div>
    </Paper>
  );
};
