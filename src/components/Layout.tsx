import { Breakpoint } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({
    size = 'lg',
    children
}:{
    size?:Breakpoint,
    children: JSX.Element
}) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={size}>
        {children}
      </Container>
    </>
  );
}

export default Layout;