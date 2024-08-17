import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useState } from "react"
import { db } from "./data/db"

function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      // Si el artículo ya está en el carrito, incrementa la cantidad
      const updatedCart = cart.map((cartItem) => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart)
    } else {
      // Si el artículo no está en el carrito, agrégalo con cantidad 1
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  return (
    <>
    <Header cart={cart} setCart={setCart} />
      

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
              <Guitar
                guitar = {guitar}
                key={guitar.id}
                setCart = {setCart}
                cart = {cart}
                addToCart = {addToCart}
              />
          ))} 
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">EchoStrings - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )

}

export default App