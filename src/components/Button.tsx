import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 24px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  letter-spacing: -0.02em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${props => props.variant === 'secondary' ? 'transparent' : '#12A894'};
  color: ${props => props.variant === 'secondary' ? 'var(--text-dark)' : '#FFFFFF'};
  border: ${props => props.variant === 'secondary' ? '1px solid var(--text-light)' : 'none'};

  &:hover {
    background-color: ${props => props.variant === 'secondary' ? 'rgba(18, 168, 148, 0.1)' : '#0E8B7D'};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.875rem;
  }
`;

const Button = ({ 
  children, 
  variant = 'primary',
  ...props 
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
