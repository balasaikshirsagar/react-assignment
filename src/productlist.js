import React from 'react';

function ProductCard(props){

    // console.log(props);
    return(
        <> 

        <div className='card'>
           
           <img src={props.image} alt='img' height="250px"></img>
           <p className='text-center mt-3'> {props.price}</p>
           <button className='text-center btn btn-danger'>Add to Cart</button>


        </div>


        </>
    )
}

export default ProductCard;