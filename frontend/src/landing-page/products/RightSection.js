import React from 'react';

function RightSection({  imageURL,
  productName,
  productDescription,
  learnMore,}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-12 mt-5 mb-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} className="text-decoration-none">{learnMore}{learnMore && <i className="fa-solid fa-arrow-right"></i>}</a>
                </div>
                <div className="col-md-2 d-none d-md-block"></div>
                <div className='col-md-6 col-12 '>
                    <img src={imageURL} className="img-fluid" style={{width:"100%"}} alt='product image'/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;