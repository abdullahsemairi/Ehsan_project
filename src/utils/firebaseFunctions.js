import firebase from "../firebase"

export const getProductsData = async () => {
  const products = await firebase.database().ref().once("value")
  const productsData = products.val()

  console.log(productsData)
  const productsArray = []
  for (let key in productsData) {
    productsArray.push({ ...productsData[key], id: key })
  }
  console.log(productsArray)
  return productsArray
}

export const addProductData = async data => {
  await firebase
    .database()
    .ref()
    .push({
      ...data,
      quantity: Number(data.quantity),
      price: Number(data.price),
    })
}

export const getProductDataById = async id => {
  const product = await firebase.database().ref(id).once("value")
  const productData = product.val()
  return {
    ...productData,
    id: product.key,
  }
}

export const editProductData = async (data, id) => {
  await firebase
    .database()
    .ref(id)
    .update({
      ...data,
      quantity: Number(data.quantity),
      price: Number(data.price),
    })
}

export const deleteProductById = async id => {
  await firebase.database().ref(id).remove()
}
