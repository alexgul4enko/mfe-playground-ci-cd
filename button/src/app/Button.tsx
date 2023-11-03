import { FC, HTMLProps } from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  background: pink;
  font-weight: bold;
  border: 1px solid pink;
  font-size: 14px;
  padding: 14px 20px;
  border-radius: 4px;
  &:hover {
    background: transparent;
  }
`

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  type?: 'submit' | 'reset' | 'button'
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props}/>
  );
};

export default Button
