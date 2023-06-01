import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import './styles.css';

const CheckoutSideMenu = () => {
  const context = React.useContext(ShoppingCartContext);
  console.log('CART: ', context.cartProducts)
  return (
   <aside 
   className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded bg-white`}> 
     <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium'>My Order</h2>
        <div>
          <XMarkIcon 
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className='px-6 overflow-y-scroll'>
        {
          context.cartProducts.map(product => (
            <OrderCard key={product.id} title={product.title} imageUrl={product.images} price={product.price} />
          ))
        }  
      </div>  
   </aside>
    )
}

export default CheckoutSideMenu