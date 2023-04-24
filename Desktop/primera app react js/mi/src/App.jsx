import logo from './logo.svg';
import './App.css';
import ItemListContainer from './componente/ItemListContainer/ItemListContainer'
import Sidebar from './componente/navbar/SideBar'



function App() {
  return (
    <div className='my-body'>
    
    
       < Sidebar />
     
     <ItemListContainer greeting={'Bienvenido a Dark Phone!'} />


     </div>
    
  );
}

export default App;
