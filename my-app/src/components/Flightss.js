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
          label="Flight number"
          id="txt6"
          defaultValue=" "
          size="normal"
        />
        <TextField label="Date" id="txt1" defaultValue=" " />
      </div>
      <div>
        <TextField
          label="From"
          id="txt6"
          defaultValue=" "
          size="normal"
        />
        <TextField label="To" id="txt1" defaultValue=" " />
      </div>
      <div>
        <TextField
          label="Departure"
          id="txt6"
          defaultValue=" "
          size="normal"
        />
        <TextField label="Arrival" id="txt1" defaultValue=" " />
      </div>
      <div>
        <TextField
          label="Cabin"
          id="txt6"
          defaultValue=" "
          size="normal"
        />
        <TextField label="Available seats" id="txt1" defaultValue=" " />
      </div>
      <div>
        <TextField
          label="Airport"
          id="txt6"
          defaultValue=" "
          size="normal"
        />
        
      </div>
      
    </Box>
    



  );
}