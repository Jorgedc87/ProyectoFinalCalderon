import React from 'react'
import { ProductImage, ProductLoading, ProductDetails } from './'
import useItemPage from '../../hooks/useItemPage';

export const ItemDetailContainer = () => {
  const {
    item,
    count,
    loading,
    handleIncrement,
    handleDecrement,
    addItemsToCart,
  } = useItemPage();
  
  if (loading) {
    return <ProductLoading />;
  }

  if (!item) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-around gap-8">
        <ProductImage img={item.img} name={item.name} />
        <ProductDetails
          item={item}
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          addItemsToCart={addItemsToCart}
        />
      </div>
  )
}
