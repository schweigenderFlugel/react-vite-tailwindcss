import React from 'react'
import { Link } from 'react-router-dom';
import Layout from "../../Components/Layout"
import OrdersCards from '../../Components/OrdersCards';
import { ShoppingCartContext } from '../../Context';

function MyOrders() {
  const context = React.useContext(ShoppingCartContext);
    return (
      <Layout>
        <div className='flex w-100 relative justify-center items-center mb-4'>
          <h1 className='font-medium text-xl' >My Orders</h1>
        </div>
        {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCards
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
            </Link>
          
        )
        )}
        
      </Layout>
    )
  }
  
  export default MyOrders