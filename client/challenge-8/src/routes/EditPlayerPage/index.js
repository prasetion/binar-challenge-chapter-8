import { Container, Form, Button } from "react-bootstrap";

const EditPlayerPage = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="name" className="form-control" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="email" className="form-control" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" name="phone" className="form-control" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Edit
        </Button>
      </Form>
    </Container>
  );
};

export default EditPlayerPage;
