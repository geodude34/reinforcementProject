import React, { useEffect } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <a
      href='http://localhost:3000/auth/google'
      style={{ textDecoration: 'none' }}
    >
      <Button id='login' variant='contained' size='large'>
        <GoogleIcon />
        <span
          style={{
            fontFamily: 'Open Sans, sans-serif',
            marginLeft: '13px',
            fontSize: '11px',
          }}
        >
          Sign in with Google
        </span>
      </Button>
    </a>
  );
}
