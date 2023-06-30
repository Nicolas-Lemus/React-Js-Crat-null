import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';
import { CardContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
//pasamos el estado del useContext
    const {count} = useContext(CardContext);

    return (
        <div className='cart'>
            <Link to="/cart">
                <FontAwesomeIcon className='icon' icon={faCartShopping}/>
            </Link>
            <span>{count}</span>
        </div>
    )
}
export default CartWidget