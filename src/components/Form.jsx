import React from 'react';
import DropDown from './DropDown';
import Logo from './Logo';

const Form = () => {
  return (
    <form action="POST">
      <div className='mb-3'>
        <Logo />
      </div>
      <div>
        <label class="form-label" for="email">Email</label>
        <input type='email' class="form-control" name="email"/>
      </div>
      <div>
        <label class="form-label" for="password">Password</label>
        <input class="form-control" name="password"/>
      </div>
      <div class="mb-3">
        <a href="www.google.com">Forgot Password</a>
        <DropDown/>
      </div>
     
        <input class="btn btn-primary" type="submit" />
    </form>
  )
}

export default Form
