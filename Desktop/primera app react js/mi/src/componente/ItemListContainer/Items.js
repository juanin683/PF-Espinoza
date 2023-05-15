
const productos = [
    {   id:' 1',
        nombre: "Lenovo Tab M10 plus Gen 3",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZ9POrWTIvVBJQU_rz-AIjB5quPZuJCuKeQ&usqp=CAU",
        precio: 86399,
        categoria: "tablets",
        stock: 40,
    },
    {   id: '2',
        nombre: "Samsung Galaxy A04 64GB",
        precio: 75999,
        categoria:"celulares",
        img:"https://http2.mlstatic.com/D_NQ_NP_624753-MLA52333538839_112022-O.jpg",
        stock:10,
    },
    {id: '3',
        nombre: "Notebook Alkon NSX 14” ",
        precio: 230000,
        img:"https://images.fravega.com/f300/6686db75ae092d4747986355af065c0f.jpg.webp",
        categoria:"laptops",
        stock: 20,
    },
    {id: '4',
        nombre: "Tarjeta Grafica Asus Dual Geforce Rtx 2060 ",
        precio:399999,
        img:"https://http2.mlstatic.com/D_NQ_NP_914559-MLA49073417717_022022-O.webp",
        categoria: "accesorios y componentes",
        stock:13,
    },



]





export const getDatos = () => {
    
    return new Promise((resolve)=> {
    setTimeout(()=>{
        resolve(productos)
    }, 2000)

})}

export const getDetalles = (unItemConId) => {
    return new Promise((res)=> {
        setTimeout(()=>{
            res(productos.find(unItem => unItem.id === unItemConId))
        }, 2000)
    
    })
}

export default {getDatos, getDetalles};


