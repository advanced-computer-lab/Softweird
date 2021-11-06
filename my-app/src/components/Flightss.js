import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldSizes() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="From"
          id="txt6"
          defaultValue="Small"
          size="small"
        />
        <TextField label="To" id="txt1" defaultValue="Normal" />
      </div>
      <div>
        <TextField
          label="2"
          id="txt2"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <TextField
          label="Size"
          id="txt3"
          defaultValue="Normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          label="Size"
          id="txt4"
          defaultValue="Small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="txt5"
          defaultValue="Normal"
          variant="standard"
        />
      </div>
    </Box>
    



  );
}