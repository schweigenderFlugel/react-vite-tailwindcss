import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetails from "../../Components/ProductDetails";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = React.useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex w-100 relative justify-center items-center mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search your product"
        className="rounded-lg border border-black w-80 p-3 mb-6 focus:outline-none"  
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetails />
    </Layout>
  );
}

export default Home;
