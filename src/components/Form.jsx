import React from 'react';
import DropDown from './DropDown';
import Logo from './Logo';

const Form = () => {
  return (
    <form action="POST">
        <Logo />
        <label for="email">Email</label>
        <input name="email"/>

        <label for="password">Password</label>
        <input name="password"/>

        <a href="www.google.com">Forgot Password</a>
        <DropDown/>
        <input type="submit" />
    </form>
  )
}

export default Form
