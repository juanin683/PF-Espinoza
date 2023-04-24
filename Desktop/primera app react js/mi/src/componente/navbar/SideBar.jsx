import React from "react";
import './NavBar.css'
import CartWidget from '../CarWidget/CarWidget'
const SideBar = () => {
    return(
        <nav>
        <div className="NavBar">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <h1>
                Mi logo
            </h1>
            <ul>
                <li className="home">
                    <a href="#" className="estilo1"><i className="large material-icons">home</i></a>

                
                
                </li>
                {/* carrito */}
                < CartWidget/>

                <li className="home">
                     <a href="#" className="estilo1"> Tablets</a>
                </li>

                <li className="home">
                     <a href="#" className="estilo1"> Celulares</a>
                </li>
                <li className="home">
                     <a href="#" className="estilo1"> Laptops</a>
                </li>
                
                <li className="home">
                     <a href="#" className="estilo1"> Accesorios</a>
                </li>

            </ul>
        </div>

        </nav>

    )
}

export default SideBar;
