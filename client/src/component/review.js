import React, { useState } from 'react'
import {AddProductReviewAction} from '../actions/productAction'
import {useDispatch , useSelector  } from 'react-redux'

const  ReviewComponent = ({products}) => {







    const dispach = useDispatch()




    const [comment , setcomment] = useState('')



    const senreview=()=>{

        if(localStorage.getItem('currentUser'))
{
    const currentuser = JSON.parse(localStorage.getItem('currentUser'))

    let alreadyreviewd

    for(var i=0;i<products.reviews.length;i++)
    {
        if( products.reviews[i].userid == currentuser._id )
        {
            alreadyreviewd = true 
        }
    }

    if(alreadyreviewd)
    {
        alert(`You've already reviewed this product`)
    }
    else{

        const review = {
            comment : comment
        }





       dispach(AddProductReviewAction(review , products._id))

    }

}

       

       
    }



    return (
        <div>
           <h2> Give Your Review  </h2>

           <input type="text" value={comment} onChange={ (e)=>{ setcomment(e.target.value) } }  ></input>

            <button onClick={senreview}  > Submit </button>



            <h2> Latest Reviews </h2>

            { 

products.reviews &&  products.reviews.map(rev=> {
                return <div>

                    <p> {rev.comment} </p>
                    <i>By : {rev.name} </i>

                    </div>
            } )

            }
        
        
        
        </div>
    )
}


export default  ReviewComponent;