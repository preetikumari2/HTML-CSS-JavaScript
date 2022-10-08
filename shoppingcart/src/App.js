import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'Acer-Aspire 3',
      category: 'Laptop',
      seller: 'Croma.com',
      price: 36550
    },
    {
      url: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80',
      name: 'Oneplus Y Series 100cm',
      category: 'Television',
      seller: 'Croma.com',
      price: 18999
    },
    {
      url: 'https://images.unsplash.com/photo-1592179900431-1e021ea53b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      name: 'Apple iPhone 14',
      category: 'Phone',
      seller: 'Apple',
      price: 75460
    },
    {
      url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      name: 'Canon EOS 1500D',
      category: 'Camera',
      seller: 'Camron LTD',
      price: 36690
    },
    {
      url: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      name: 'boAt Storm RTL Smart watch',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2599
    },
    {
      url: 'https://images.unsplash.com/photo-1623998022290-a74f8cc36563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZCUyMHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      name: 'Samsung Galaxy AirPods',
      category: 'AirPods',
      seller: 'Samsung.com',
      price: 6390
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;