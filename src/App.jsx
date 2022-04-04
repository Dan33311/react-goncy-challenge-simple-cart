import { useState, useEffect } from 'react';
import api from './api'
import './App.css'


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  return (
    <main>
      <header>Estampitiency</header>
        <section>
          {products.map((product) => (
            <article key={product.id}>
              <img src={product.image} />
              <div>
                <p>{product.title}</p>
                <p>{product.description}</p>
              </div>
              <button>Agregar</button>
            </article>
          ))}
        </section>
        <aside>
          <button>3 productos (total: $12)</button>
        </aside>
      </main>
  )
}

export default App
