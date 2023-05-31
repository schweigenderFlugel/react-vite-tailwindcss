import React from 'react';
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetails from '../../Components/ProductDetails';

function Home() {
  const [ items, setItems ] = React.useState(null)
  React.useEffect(() => {
    // Con fetch estamos diciendo que el Home necesita de la infomación de la API. 
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          { items?.map((item) => ( <Card key={item.id} data={item} />) )}
        </div>
        <ProductDetails />
    </Layout>
  )
}
  
export default Home