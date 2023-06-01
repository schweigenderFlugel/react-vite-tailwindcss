import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react';
import './styles.css';
import { ShoppingCartContext } from '../../Context';

const ProductDetails = () => {
  const context = React.useContext(ShoppingCartContext);
  console.log('PRODUCT TO SHOW: ',  context.productToShow)
  return (
   <aside 
   className={`${context.isProductDetailsOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded bg-white`}> 
     <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium'>Detail</h2>
        <div>
          <XMarkIcon 
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </div>
      <figure className='px-6'>
        <img 
          className='w-full h-full rounded-lg' 
          src={context.productToShow.images} alt={context.productToShow.title} 
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-2md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
     
   </aside>
    )
}

export default ProductDetails