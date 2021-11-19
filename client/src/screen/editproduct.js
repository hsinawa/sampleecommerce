import React from 'react'
import { getallproductsById, UpdateProductAction } from '../actions/productAction';
import { useEffect, useState } from 'react';
import { GetProductByIdReducer ,UpdateProductReducer } from '../reducers/productReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AddProductAction } from '../actions/productAction';
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import Message from '../component/message'

const EditProduct = ({ match }) => {

    const [name, setname] = useState('');
    const [price, setprice] = useState();
    const [countinstock, setcountinstock] = useState()
    const [image, setimage] = useState('');
    const [category, setcategory] = useState('');
    const [description, setdescription] = useState('');


    const dispatch = useDispatch()

    const prodstate = useSelector(state => state.GetProductByIdReducer)

    const { products, error, loading } = prodstate

    const updatestate = useSelector(state=> state.UpdateProductReducer )

    const {success , update_error , uploading } = updatestate

    useEffect(() => {

        if (products) {
            if (products._id == match.params.product) {
                setname(products.name)
                setprice(products.price)
                setdescription(products.description)
                setimage(products.image)
                setcountinstock(products.countInStock)
                setcategory(products.category)

            }
            else {
                dispatch(getallproductsById(match.params.product))

            }



        }
        else {
            dispatch(getallproductsById(match.params.product))

        }



    }, [dispatch, products])

    const editproduct = (e) => {
        e.preventDefault()
        const updatedproduct = {
            name: name,
            price: price,
            countInStock: countinstock,
            image: image,
            category: category,
            description: description
        }

        dispatch(UpdateProductAction(match.params.product, updatedproduct))


    }



    return (
        <div>
            <h1> Edit Product  </h1>

            {loading && (<Loading />)}
            {uploading && (<Loading/>) }
            {update_error && (<Message message='Something Went Wrong' />)}
            {error && (<Message message='Something Went Wrong' />)}
            {success && (<Message message='Product Updated Successfully' />) }

            {products && (
                <div>
                    <h1> {products.name} </h1>

                    <form onSubmit={editproduct} >

                        <input type="text" placeholder="enter name" required value={name} onChange={(e) => { setname(e.target.value) }}  ></input>
                        <input type="text" placeholder="enter price" required value={price} onChange={(e) => { setprice(e.target.value) }}  ></input>
                        <input type="text" placeholder="enter Stock" required value={countinstock} onChange={(e) => { setcountinstock(e.target.value) }}  ></input>
                        <input type="text" placeholder="enter Image URL" required value={image} onChange={(e) => { setimage(e.target.value) }}  ></input>
                        <input type="text" placeholder="enter Category" required value={category} onChange={(e) => { setcategory(e.target.value) }}  ></input>
                        <input type="text" placeholder="enter description" required value={description} onChange={(e) => { setdescription(e.target.value) }}  ></input>
                        <br />
                        <button type="submit"  > UPDATE </button>

                    </form>

                </div>
            )}


        </div>
    )
}


export default EditProduct;