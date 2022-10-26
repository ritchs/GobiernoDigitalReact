import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HeadNav= ()=> {
  return (
    <Navbar className="border-bottom border-danger" >
      <Container>
        <Navbar.Brand href="/">INICIO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/home">Home</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeadNav;