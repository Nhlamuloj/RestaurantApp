import React,{createContext, CreateContext, useState} from "react";
import  { getProduct } from "./src/details/food";

export const CartContext = createContext();

export function CartProvider(props){
    
    const [items, setItems] = useState([]);

    function addItemToCart(id){
        const  productId = getProduct(id)
        setItems((prevItems)=>{
            const item = prevItems.find((item)=>(item.id == id))
             if(!item){
                return[...prevItems,{
                    id,
                    qty:1,
                    productId,
                    totalPrice: productId.price
                }]
             }else{
                return prevItems.map((item)=>{
                    if(item.id ==id){
                        item.qty++,
                        item.totalPrice+= productId.price;
                    }
                    return item;
                })
             }
        })
    }

    function getItemsCount(){
        return items.reduce((sum, item)=>(sum+item.qty),0)
    }

    function getTotalPrice(){
        return items.reduce((sum,item)=>(sum+item.totalPrice),0)
    }

    return(
        <CartContext.Provider value={{items,getItemsCount,addItemToCart,getTotalPrice}}>
            {props.children}
        </CartContext.Provider>
    )

}