import './Card.css';
import { Link } from 'react-router-dom';
import CardButtons from '../CardButtons/CardButtons';


const Card = ({productsData}) => {
  
  return (
    <div className="divPadre">
      <div className='Cards'>
        <div className='Card'>
            <div className='Title'>{productsData.title}</div>
            <div className='Images'>
              <Link to={`/products/${productsData.id}`}><img src={productsData.images} alt="productos-disponibles"/></Link>
            </div>
            <Link className='Detail' to={`/products/${productsData.id}`}><p>Ir al Detalle</p></Link>
            <div className='Previous'>${productsData.previous_price}</div>
            <div className='Price'>${productsData.price}</div>
            <div className='Stock'>Stock: {productsData.stock}</div>
            <CardButtons/>
        </div>
        </div>
    </div>
  );
}

export default Card
