import { createContext } from "react";
import { products } from "../assets/assets"; 
/**
 * Ce context est utilisé pour gérer le state global de l'application :
 * - Le panier de l'utilisateur
 * - Les produits en stock
 * - Les commandes passées
 * - Les utilisateurs connectés
 * - Les administrateurs connectés
 */
export const ShopContext = createContext();

// On crée un provider pour le context
const ShopContextProvider = (props) => {

    // Création des variables qui seront utilisé dans l'ensemble de l'application 
    const currency = '€'; 
    const delivery_fee = 10; 


    const value = {
      products,
      currency,
      delivery_fee
    }

    return (
      <ShopContext.Provider value={value}>
        {props.children}
      </ShopContext.Provider>
    )
}

export default ShopContextProvider; 