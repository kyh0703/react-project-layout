import { FC, HTMLAttributes } from 'react';

import { ResponsiveContainer } from './responsive.styles';

const Responsive: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  ...rest
}) => {
  return <ResponsiveContainer {...rest}>{children}</ResponsiveContainer>;
};

export default Responsive;
