import React from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  // Importation du ShopContext via le useContext//
  const { products } = useContext(ShopContext);

  // State //
  const [latestProducts, setLatestProducts] = useState([]);

  // useEffect //
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Dernières"} text2={"Collections"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Découvrez nos nouveaux essentiels de saison : des coupes impeccables
          et des matières nobles pour une allure sans effort.
        </p>
      </div>
      {/* Rendu des Produits  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
