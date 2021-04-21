import React from "react"
import { Card, Button, CardColumns, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import HeaderPage from "./HeaderPage"
import HeaderPageTwo from "./HeaderPageTwo"
import Navbarabc from "./Navbar/Navbarabc"

export default function ProductsCards(props) {
  let output
  if (props.products === null) {
    output = <h2>Loading...</h2>
  } else {
    output = props.products.map(product => (
      <Card key={product.title} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} thumbnail="true" />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>

          <Link className="btn btn-primary" to={"/product/" + product.id}>
            More Information
          </Link>
        </Card.Body>
      </Card>
    ))
  }

  return (
    <>
      <Navbarabc />
      <HeaderPageTwo />
      <br />
      <Button variant="primary" href="../add-product">
        Add An Opportunity
      </Button>
      <Container>
        <br />
        <br />
        <br />
        <CardColumns>{output}</CardColumns>
      </Container>
    </>
  )
}
