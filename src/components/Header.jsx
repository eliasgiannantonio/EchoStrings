function Header({ cart, setCart }) {

  const incrementQuantity = (item) => {
    const updatedCart = cart.map((cartItem) => 
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(updatedCart)
  }

  const decrementQuantity = (item) => {
    const updatedCart = cart.map((cartItem) => 
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ).filter(cartItem => cartItem.quantity > 0); // Eliminar si la cantidad llega a 0
    setCart(updatedCart)
  }

  const removeItem = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id)
    setCart(updatedCart)
  }

  const emptyCart = () => {
    setCart([])
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" id="logo" src="./img/logo.png" alt="imagen logo" />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img className="img-fluid" src="./img/carrito.png" alt="imagen carrito" />

              <div id="carrito" className="bg-white p-3">
                {cart.length === 0 ? (
                  <p className="text-center">El carrito está vacío</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <img className="img-fluid" src={`./public/img/${item.image}.jpg`} alt={item.name} />
                            </td>
                            <td>{item.name}</td>
                            <td className="fw-bold">${item.price}</td>
                            <td className="align-items-center gap-2">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => decrementQuantity(item)}
                              >
                                -
                              </button>
                              {item.quantity}
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => incrementQuantity(item)}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => removeItem(item)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">Total a pagar: <span className="fw-bold">${totalPrice}</span></p>
                    <button 
                      className="btn btn-dark w-100 mt-3 p-2"
                      onClick={emptyCart}
                    >
                      Vaciar Carrito
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
