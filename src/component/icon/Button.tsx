import React from 'react';
type ButtonProps = React.ComponentProps<'button'>;

const Button = ({ children, ...rest }:ButtonProps) => {
  return (
    <button type='button' {...rest}>
      {children}
    </button>
  );
};

export default Button;
