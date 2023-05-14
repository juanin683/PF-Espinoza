import './Button.css'

const  Button = ({ id, className, type, onClick, text}) =>{
    return(
        <button 
        id={id}
        className={className}
        type={type}
        onClick={onClick}

        >
           {text} 
        </button >
    )
}

export default Button;