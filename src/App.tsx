
import './App.css'
import { ClearAllButton } from "./components/ClearAllButton"
import { ProductCounter } from "./components/ProductCounter"
import { ProductForm } from "./components/ProductForm"
import { ProductList } from "./components/ProductList"

function App() {

  return (
    <>
      <header>
        <h2>React with Redux ToolKit</h2>
        <ProductCounter />
      </header>
      
      <main>
        <ClearAllButton />
        <ProductForm />
        <hr />
        <ProductList />
      </main>
    </>
  )
}

export default App
