import { Breakpoint } from '@mui/material';
import Container from '@mui/material/Container';

const Layout = ({ size = 'lg', children }: { size?: Breakpoint; children: JSX.Element }) => {
  return (
    <>
      <Container maxWidth={size}>{children}</Container>
    </>
  );
};

export default Layout;
