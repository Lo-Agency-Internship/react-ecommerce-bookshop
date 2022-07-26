import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function ContainerNavbar() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">SignUp/In</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}
