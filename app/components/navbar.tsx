import { useAuth } from '../context/AuthUserContext';
import { Container, Navbar, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const NavbarComponent = () => {
  const { authUser, loading } = useAuth();

  if (loading) {
    return <Navbar color="light" light>Loading...</Navbar>;
  }

  return (
    <Navbar color="light" light>
      <Container>
        <NavbarBrand href="/">Siptatif</NavbarBrand>
        <Nav>
          {authUser && (
            <>
              <NavItem>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signout">Sign Out</NavLink>
              </NavItem>
            </>
          )}
          {!authUser && (
            <>
              <NavItem>
                <NavLink href="/signin">Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;