import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useState } from "react"
import { db } from "./data/db"

function App() {

  const [data, setData] = useState(db)

  return (
    <>
    <Header />
      

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
              <Guitar
                guitar = {guitar}
                key={guitar.id}
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