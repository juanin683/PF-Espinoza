import React from "react";
import './NavBar.css'
import CartWidget from '../CarWidget/CarWidget'
import '../../pages/Tablet'
import { NavLink , Link } from "react-router-dom";


const SideBar = () => {
    return(
        <>
        <nav>
        <div className="NavBar">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
            <Link to='/' ><h1 className="titulo-navbar">Dark Phone</h1></Link>
            
            <ul>
                <li className="home">
                    <NavLink to='/' className="estilo1"><i className="large material-icons">home</i></NavLink>
                </li>
                {/* carrito */}
                < CartWidget/>

                <li className="home">
                     <NavLink to='/categoria/tablets' className="estilo1"> Tablets</NavLink>
                </li>

                <li className="home">
                     <NavLink to='/categoria/celulares' className="estilo1"> Celulares</NavLink>
                </li>
                <li className="home">
                     <NavLink to='/categoria/laptops' className="estilo1"> Laptops</NavLink>
                </li>
                
                <li className="home">
                     <NavLink to='/categoria/accesorios y componentes' className="estilo1"> Accesorios y Componentes</NavLink>
                </li>



            </ul>

        </div>
        </nav>
        </>

    )
}

export default SideBar;
