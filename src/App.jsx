import products from './assets/data/products'
import ItemsContainer from './assets/ItemsContainer/ItemsContainer'

import './App.scss'

function App() {

  return (
    <>
    <ItemsContainer productsArr={products}/>
    </>
  )
}

export default App
