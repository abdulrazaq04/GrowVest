import React from 'react';

function Universes() {
    return ( 
        <div className='container text-center  text-muted' style={{marginTop:"100px"}}>
            <h3 className='mb-4'>The Zerodha Universe</h3>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='row mt-5'>

                <div className='col-md-4 col-12 p-4'>
                    <img alt="smallcase" className="img-fluid w-75" src='/media/smallcaseLogo.png'/>
                    <p className='mt-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    <img alt="streak" className="img-fluid w-75 mt-5" src='/media/streakLogo.png'/>
                    <p className='mt-3'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                
                <div className='col-md-4 col-12 p-4'>
                    <img alt="sensibull" className="img-fluid w-75" src='/media/sensibullLogo.svg'/>
                    <p className='mt-4'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more. </p>
                    <img alt="fundhouse" className="img-fluid mt-5" style={{width:"70%"}} src='/media/zerodhaFundhouse.png'/>
                    <p className='mt-5'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

                <div className='col-md-4 col-12 p-4'>
                    <img alt="Ditto" className="img-fluid" style={{width:"40%"}} src='/media/dittoLogo.png'/>
                    <p className='mt-4'>Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free </p>
                    <img alt="Tijori" className="img-fluid mt-5" style={{width:"60%"}} src='/media/tijori.svg'/>
                    <p className='mt-5'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
            </div>
            <button className='btn btn-primary my-5 fs-3 px-4 py-2'>Sign up for free</button>
        </div>
    );
}

export default Universes;