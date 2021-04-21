import React, { Component } from "react"
import { ListGroup, Image } from "react-bootstrap"

import { getProductDataById } from "../utils/firebaseFunctions"
import Navbarabc from "./Navbar/Navbarabc"
import HeaderPageTwo from "./HeaderPageTwo"
import "./ViewProducts.css"

export default class ViewProduct extends Component {
  state = {
    product: null,
  }

  async componentDidMount() {
    const productId = this.props.match.params.id
    const productData = await getProductDataById(productId)
    this.setState({ product: productData })
  }

  render() {
    if (this.state.product === null) return <h1>Loading..</h1>
    else
      return (
        <>
          <Navbarabc />
          <article>
            <div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/999.png"}
                  width="100%"
                  height="50%"
                  alt="firstlogo"
                  className="Header"
                />
              </div>
            </div>
          </article>
          <br /> <br />
          <br /> <br />
          <ListGroup style={{ height: "100px", width: "50%", marginLeft: "25%" }} className="align-items-center">
            <Image src={this.state.product.image} />
            <ListGroup.Item>
              <strong>Title:</strong>
              <span>{this.state.product.title}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong>
              <span>{this.state.product.description}</span>
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <strong>Date:</strong>
              <span>{this.state.product.quantity}</span>
            </ListGroup.Item> */}
            <ListGroup.Item>
              <strong>Number of Voulnteers:</strong>
              <span>{this.state.product.price}</span>
            </ListGroup.Item>
          </ListGroup>
        </>
      )
  }
}
