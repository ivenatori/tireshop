import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Cart_form.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Cart_form() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div className="form">
        <div className="formContainer">
      <div className="textField">
          
        <TextField
          required
          id="outlined-name"
          label="Введите Имя"
          
        />
        
        
        <TextField
          required
          id="outlined-family"
          label="Введите Фамилию"
          
        />
        
        <TextField
          id="outlined-phone"
          label="Номер телефона"
          type="number"
          
          
        />
        
        <TextField
          id="outlined-adress"
          label="Введите адрес"
          
          
        />
        <TextField
          id="outlined-email"
          label="Введите email"
          
          
        />
        <TextField
          id="outlined-notes"
          label="Введите комментарий" 
        />
      </div>
      <div className="knab">
        <Link to="/purchase"><Button variant="contained">Заказать</Button></Link>
        </div>
        </div>
        </div>
    </Box>
  );
}
