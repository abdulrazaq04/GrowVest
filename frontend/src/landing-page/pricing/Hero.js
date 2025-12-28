import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center text-muted'>
            <div className='row my-5 py-5'>
                <h2>Charges</h2>
                <p>List of all charges and taxes</p>
                <div className='col-md-4 col-12 mb-4'>
                    <img src='/media/pricing0.svg' alt="Free equity delivery"/>
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-md-4 col-12 mb-4'>
                    <img src='/media/pricing-20.svg' alt="Free equity delivery"/>
                    <h2>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-md-4 col-12 mb-4'>
                    <img src='/media/pricing0.svg' alt="Free equity delivery"/>
                    <h2>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;