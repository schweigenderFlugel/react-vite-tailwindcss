import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css';

const ProductDetails = () => {
  return (
   <aside className='product-detail flex flex-col fixed right-0 border border-black rounded bg-white'> 
     <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium'>Detail</h2>
        <div><XMarkIcon className='h-6 w-6 text-black'/></div>
     </div>
   </aside>
    )
}

export default ProductDetails