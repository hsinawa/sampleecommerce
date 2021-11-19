import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'
import style from './navbar.css'
import {useDispatch ,  useSelector } from 'react-redux';


export default function ProductGrid({prod})
{

   





    return(
        <div  >





            <Link to={`product/${prod._id}`} >
             <div className="griditemm" >

<p> {prod.name} </p>

<img  src={prod.image} id="img" />

<Rating 


initialRating={prod.Rating}
/>
</div>

</Link>



        </div>
    )


}