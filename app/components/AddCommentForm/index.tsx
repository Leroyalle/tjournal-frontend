import React from 'react';
import { Input } from '@mui/material';
import styles from './AddCommentForm.module.scss';
import { Button } from '@material-ui/core';
interface IAddCommentForm {}

const AddCommentForm: React.FC<IAddCommentForm> = () => {
  const [clicked, setClicked] = React.useState(false);
  const [value, setValue] = React.useState<string>('');

  const onClickPost = () => {
    setClicked(false);
    setValue('');
  };

  return (
    <div className={styles.form}>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setClicked(true)}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
        minRows={clicked ? 5 : 1}
      />
      {clicked && (
        <Button
          onClick={() => onClickPost()}
          className={styles.postButton}
          variant="contained"
          color="primary">
          Отправить
        </Button>
      )}
    </div>
  );
};
export default AddCommentForm;
