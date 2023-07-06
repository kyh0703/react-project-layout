import { Link as RouterLink, LinkProps } from 'react-router-dom';

const Link = ({ children, ...props }: LinkProps) => {
  return <RouterLink {...props}>{children}</RouterLink>;
};

export default Link;
