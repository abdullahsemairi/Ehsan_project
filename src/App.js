import React, { Component, useState } from "react"

import { getProductsData, addProductData, editProductData, deleteProductById } from "./utils/firebaseFunctions"
import "./App.css"
import Navbar from "./components/Navbar/Navbarabc"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Pages/Home"
import About from "./components/Pages/About"
import SignIn from "./components/SignIn"
import ProductsCards from "./components/ProductsCards"
import AddProduct from "./components/AddProduct"
import ViewProduct from "./components/ViewProduct"
import ModifyProduct from "./components/ModifyProduct"
import SignUp from "./components/SignUp"
import PasswordReset from "./components/PasswordReset"
import ProfilePage from "./components/ProfilePage"
import UserProvider from "./providers/UserProvider"
import Application from "./components/Application"
import Sign from "./components/Sign"
import FooterPage from "./components/Footer/FooterPage"
import LinkedIn from "./components/Pages/LinkedIn"

const rtlLanguages = ["en"]
function setPageDirection(language) {
  const dir = rtlLanguages.includes(language) ? "rtl" : "ltr"
  document.documentElement.dir = dir
}
class App extends Component {
  state = {
    products: null,
    user: null,
    categories: [],
    signInError: "",
    signUpError: "",
    forgetPassError: "",
  }

  async componentDidMount() {
    const productsData = await getProductsData()
    this.setState({ products: productsData })
  }

  handleAddSubmit = async data => {
    console.log("you submitted this data:", data)
    await addProductData(data)
    const productsData = await getProductsData()
    this.setState({ products: productsData })
  }

  handleUpdateSubmit = async (data, id, history) => {
    console.log("you submitted this data:", data)
    await editProductData(data, id)
    const productsData = await getProductsData()
    this.setState({ products: productsData }, () => {
      history.push("/")
    })
  }

  handleDelete = async productId => {
    if (window.confirm("Are you sure you want to delete this product ?")) {
      deleteProductById(productId)
      const productsData = await getProductsData()
      this.setState({ products: productsData })
    }
  }

  render() {
    return (
      <div>
        <>
          <Router>
            {/* <Home/>  */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Linked-In" component={LinkedIn} />
              <Route path="/sign" component={Sign} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/resetPassword" component={PasswordReset} />

              <Route exact path="/ProductsCard">
                <ProductsCards handleDelete={this.handleDelete} products={this.state.products} />
              </Route>
              <Route path="/add-product">
                <AddProduct handleSubmit={this.handleAddSubmit} />
              </Route>

              <Route
                path="/product/edit/:id"
                render={props => {
                  if (this.state.products !== null) {
                    const productId = props.match.params.id
                    const product = this.state.products.find(el => el.id === productId)
                    return <ModifyProduct {...props} product={product} handleSubmit={this.handleUpdateSubmit} />
                  } else return <h1>HELLO</h1>
                }}
              />
              <Route exact path="/product/:id" component={ViewProduct} />
            </Switch>
          </Router>
          <FooterPage />
        </>
      </div>
    )
  }
}
export default App
