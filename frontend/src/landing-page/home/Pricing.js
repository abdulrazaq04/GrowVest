import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>

                {/* Left Section */}
                <div className='col-lg-4 col-md-12 mb-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discounting broking and price transparency in India.
                        Flat fees and no hidden charges
                    </p>
                    <a href="#" className="text-decoration-none">
                        See pricing <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                {/* Spacer (desktop only) */}
                <div className='d-none d-lg-block col-lg-2'></div>

                {/* Right Pricing Cards */}
                <div className='col-lg-6 col-md-12'>
                    <div className='row text-center'>

                        <div className='col-md col-12 border py-4 mb-3 mb-md-0'>
                            <h1 className='m-3'>₹ 0</h1>
                            <p className='px-4'>
                                Free equity delivery and direct mutual funds
                            </p>
                        </div>

                        <div className='col-md col-12 border py-4 '>
                            <h1 className='m-3'>₹ 20</h1>
                            <p>Intraday and F&O</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;
