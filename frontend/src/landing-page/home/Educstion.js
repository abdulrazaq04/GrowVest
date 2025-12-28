import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>

                {/* Image */}
                <div className='col-lg-6 col-md-12 mb-4 mb-lg-0 text-center'>
                    <img 
                        src='/media/education.svg' 
                        alt='Market education'
                        className='img-fluid'
                        style={{width:"70%"}}
                    />
                </div>

                {/* Content */}
                <div className='col-lg-6 col-md-12'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>

                    <p>
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading
                    </p>
                    <a href='#' className='text-decoration-none'>
                        Varsity <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <p className='mt-5'>
                        Trading Q&amp;A, the most active trading and investment community in India
                        for all your market related queries
                    </p>
                    <a href='#' className='text-decoration-none'>
                        TradingQ&amp;A <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Education;
