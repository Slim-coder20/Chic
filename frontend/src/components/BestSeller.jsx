import React from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  // Importation du ShopContext via le useContext//
  const { products } = useContext(ShopContext);

  // State //
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    const bestProdcut = products.filter((item) => item.bestseller);
    setBestSellerProducts(bestProdcut.slice(0, 5)); 
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Meilleurs"} text2={"Ventes"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Découvrez les pièces qui vous font craquer : explorez nos meilleures
          ventes et trouvez vos futurs favoris.
        </p>
      </div>
      {/* Rendu des Produits  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellerProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            bestseller={item.bestseller}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
