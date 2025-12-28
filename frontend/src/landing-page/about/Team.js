import React from 'react';

function Team() {
    return ( 
    <div className="container">
        <div className="row ">
            <h1 className="fs-2 text-center">
                people
            </h1>
        </div>
        <div className="row p-5 ">
            <div className="col-4 p-5 text-muted fs-5">
                <div className='text-center'>
                <img src='/media/nithinKamath.jpg' style={{borderRadius: "50%", width:"100%"}}/>
                <h5 className='mt-4'>Nithin Kamath</h5>
                <p className='text-muted fs-6'>Founder, CEO</p></div>
            </div>
            <div className="col-8 p-5 text-muted fs-5">
                <p>
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry..</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="#" className="text-decoration-none">Homepage</a> / <a href="#" className="text-decoration-none">TradingQnA</a> / <a href="#" className="text-decoration-none">Twitter</a></p>
            </div>
        </div>
    </div>
    );
}

export default Team;