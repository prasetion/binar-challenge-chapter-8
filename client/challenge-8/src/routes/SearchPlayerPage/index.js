import { Container, Form, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SearchPlayerPage = () => {
  return (
    <div>
      <Container className="mt-3">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="name" className="form-control" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Filter</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select filter</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>

      <Container className="mt-3">
        <h1>Player Data</h1>;
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Email Name</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <LinkContainer to="/editplayer">
                  <Button>Edit</Button>
                </LinkContainer>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default SearchPlayerPage;
