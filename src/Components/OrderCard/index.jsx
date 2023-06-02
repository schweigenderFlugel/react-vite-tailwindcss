import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react';
import { ShoppingCartContext } from '../../Context';

const OrderCard = props => {
  const  { id, title, imageUrl, price, handleDelete } = props;
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={(event) => substractProductsToCart(event, id)} className='h-6 w-6 text-black cursor-pointer' />
  }

  const context = React.useContext(ShoppingCartContext);
  const substractProductsToCart = (event, id) => {
    event.stopPropagation();
    context.setCount(context.count - 1);
    handleDelete(id)
  };
  return (
    <div className="flex justify-between items-center mb-3">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
      </div>
      {renderXMarkIcon}
    </div>
  );
};

export default OrderCard;
