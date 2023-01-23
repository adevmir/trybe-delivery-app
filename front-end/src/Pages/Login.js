import React from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
  return (
    <div>
      <Redirect to="/login" />
    </div>
  );
}

export default Login;
