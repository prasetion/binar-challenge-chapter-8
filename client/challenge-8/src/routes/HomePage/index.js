import { Container, Form, Button, Table } from "react-bootstrap";
import { Component } from "react";

export default class HomePage extends Component {
  documentData;

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // on form submit...
  handleFormSubmit(e) {
    e.preventDefault();
    let entries = [];
    if (localStorage.getItem("document")) {
      entries = JSON.parse(localStorage.getItem("document"));
      entries.push(this.state);
      localStorage.setItem("document", JSON.stringify(entries));
    } else {
      entries.push(this.state);
      localStorage.setItem("document", JSON.stringify([this.state]));
    }
  }

  renderTableData() {
    let entries = [];
    if (localStorage.getItem("document")) {
      entries = JSON.parse(localStorage.getItem("document"));
    }

    return (
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  render() {
    return (
      <div>
        <Container className="mt-3">
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Player Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                className="form-control"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>

        <Container className="mt-3">
          <h1>Detail Player Data</h1>
          <div>{`Player Name: ${this.state.name}`}</div>
          <div>{`Email: ${this.state.email}`}</div>
          <div>{`Phone: ${this.state.phone}`}</div>
        </Container>

        <Container className="mt-3">
          <h1>Player List Data</h1>;{this.renderTableData()}
        </Container>
      </div>
    );
  }
}
