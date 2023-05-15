import './App.css';
import Sidebar from './componente/navbar/SideBar'
import ItemListContainer from './componente/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componente/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route,Routes} from 'react-router-dom'




function App() {
  return (
    
    <div className='my-body'>
    <BrowserRouter>
    < Sidebar />
    <Routes>
    
    <Route path='/'element={<ItemListContainer />}/>
    <Route path='/categoria/:categoria'element={<ItemListContainer/>}/>
    <Route path='/item/:itemConId'element={<ItemDetailContainer/>}/>
    

    </Routes>
    
    </BrowserRouter>
    </div>
    
  );
}

export default App;


