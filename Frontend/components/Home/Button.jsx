import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {

  return (
    <Stack spacing={2} direction="row">
      <a href={props.link}><Button id='buttoning' variant="contained">{props.text}</Button></a>
    </Stack>
  );
}
