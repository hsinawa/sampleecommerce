export const AddToCart=(products , quantity)=>(dispatch ,getState )=>{

    const CartItem ={
        name : products.name ,
        _id : products._id ,
        price : products.price ,
        CountInStock : products.CountInStock ,
        quantity : quantity
    }

    dispatch({type:'ADDTOCART' , payload:CartItem })

    localStorage.setItem('CartItem' , JSON.stringify( getState().CartReducer.CartItem ) )

}

export const DeleteFromCart=(item)=>(dispatch , getState)=>{
    
    
    dispatch({ type:'DELETEFROMCART' , payload:item })
    localStorage.setItem('CartItem' , JSON.stringify( getState().CartReducer.CartItem ) )
}