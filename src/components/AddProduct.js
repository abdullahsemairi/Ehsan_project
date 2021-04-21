import React, { Component } from "react"
import { Form, Button, Container } from "react-bootstrap"
import Navbarabc from "./Navbar/Navbarabc"

class AddProduct extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    quantity: 0,
    price: 0,
  }

  handleChangeTitle = e => {
    const value = e.target.value
    this.setState({ title: value })
  }
  handleChangeDescription = e => {
    const value = e.target.value
    this.setState({ description: value })
  }
  handleChangeQuantity = e => {
    const value = e.target.value
    this.setState({ quantity: value })
  }
  handleChangeURL = e => {
    const value = e.target.value
    this.setState({ image: value })
  }
  handleChangePrice = e => {
    const value = e.target.value
    this.setState({ price: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <>
        <Navbarabc />
        <br />
        <br />

        <Container>
          <Form onSubmit={this.handleSubmit}>
            <h1>Add An Opportunity</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control onChange={this.handleChangeTitle} type="text" placeholder="Enter title" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Image URL</Form.Label>
              <Form.Control onChange={this.handleChangeURL} type="url" placeholder="Enter Image URL" required />
              <Form.Text className="text-muted">
                Please put a valid image URL: example: https://imgs.com/1234.png
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={this.handleChangeDescription} as="textarea" rows={3} required />
            </Form.Group>
            <Form.Text className="text-muted">Please add contact information in the discription </Form.Text>
            {/* <Form.Group controlId="formBasicPrice">
              <Form.Label>Date:</Form.Label>
              <Form.Control onChange={this.handleChangePrice} type="string" placeholder="e.g. : 20-5-2021  " required />
            </Form.Group> */}
            <Form.Group controlId="formBasicQuantity">
              <Form.Label>Number of Voulnteers:</Form.Label>
              <Form.Control
                onChange={this.handleChangeQuantity}
                type="number"
                placeholder="Number of Voulnteers"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Container>
        <br />
        <br />
      </>
    )
  }
}

export default AddProduct
