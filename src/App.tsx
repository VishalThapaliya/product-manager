
import './App.css'
import { ProductCounter } from "./components/ProductCounter"
import { ProductForm } from "./components/ProductForm"
import { ProductList } from "./components/ProductList"

function App() {

  return (
    <>
      <header>
        <h2>React with Redux ToolKit</h2>
        <ProductForm />
      </header>
      
      <main>
        <hr />
        <ProductCounter />
        <ProductList />
      </main>
    </>
  )
}

export default App
