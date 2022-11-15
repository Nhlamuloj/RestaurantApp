const PRODUCTS =[
  
    {
        id:1,
        name:'sea',
        ingredients:'mix',
        price:100,
        image:require('../Images/Food/seafood1.jpg')
    },

    {
        id:2,
        name:'sea',
        ingredients:'mix',
        price:50,
        image:require('../Images/Food/drink1.jpg')
    },

    {
        id:3,
        name:'sea',
        ingredients:'mix',
        price:500,
        image:require('../Images/Food/seafood1.jpg')
    },
    
    {
        id:4,
        name:'sea',
        ingredients:'mix',
        price:200,
        image:require('../Images/Food/seafood1.jpg')
    },

    {
        id:5 ,
        name:'sea',
        ingredients:'mix',
        price:50,
        image:require('../Images/Food/seafood1.jpg')
    }
]
export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product)=>product.id == id);
}
export default PRODUCTS 