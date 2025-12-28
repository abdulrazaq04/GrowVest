import React from 'react';

function Awards() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">

                {/* Left Image */}
                <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
                    <img
                        src="/media/largestBroker.svg"
                        alt="Largest broker in India"
                        className="img-fluid"
                    />
                </div>

                {/* Right Content */}
                <div className="col-lg-6 col-md-12">
                    <h1 className="mb-3 text-center text-lg-start">
                        Largest stock broker in India
                    </h1>

                    <p className="mb-4 text-center text-lg-start">
                        2+ million Zerodha clients contribute to over 15% of all the volumes
                        in India daily by trading and investing in:
                    </p>

                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>

                        <div className="col-6">
                            <ul>
                                <li>Stocks and IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Gold</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center text-lg-start mt-4">
                        <img
                            src="/media/pressLogos.png"
                            alt="Press logos"
                            className="img-fluid"
                            style={{ maxWidth: "80%" }}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Awards;
