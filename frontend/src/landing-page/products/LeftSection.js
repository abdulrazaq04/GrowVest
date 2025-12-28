import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
        <div className="row align-items-center">
            <div className="col-md-8 col-12 p-3">
                <img src={imageURL} className="img-fluid w-75" alt="product image"/>
            </div>
            <div className="col-md-4 col-12 mb-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className="mb-3">
                    <a href={tryDemo} className="text-decoration-none">{tryDemo}{tryDemo && <i className="fa-solid fa-arrow-right"></i>}</a>
                    <a href={learnMore} style={{marginLeft:"20px"}} className="text-decoration-none">{learnMore}{learnMore && <i className="fa-solid fa-arrow-right"></i>}</a>
                </div>
                <div>
                <a href={googlePlay}><img src="/media/googlePlayBadge.svg"/></a>
                <a href={appStore} style={{marginLeft:"20px"}}><img src="/media/appstoreBadge.svg"/></a>                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
