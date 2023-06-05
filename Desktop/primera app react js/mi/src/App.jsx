import './App.css';
import Sidebar from './componente/navbar/SideBar'
import ItemListContainer from './componente/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componente/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import { CartProvider } from './CartContext/CartContext';
import Cart from './componente/Cart/Cart'
import Checkout from './componente/CheckOut/Checkout'




function App() {
  return (
    
    <div className='my-body'>
    <BrowserRouter>
    <CartProvider>
      < Sidebar />
        <Routes>
        
        <Route path='/'element={<ItemListContainer />}/>
        <Route path='/categoria/:categoria'element={<ItemListContainer/>}/>
        <Route path='/item/:itemConId'element={<ItemDetailContainer/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/checkout'element={<Checkout/>}/>


        </Routes>
    </CartProvider>
    </BrowserRouter>
    </div>
    
  );
}

export default App;


