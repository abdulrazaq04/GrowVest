import React from 'react';

function Hero() {
    return (
        <div className="container py-5">
            <div className="row text-center">

                <div className="col-12">
                    <img
                        src="/media/homeHero.png"
                        alt="Hero"
                        className="img-fluid mb-4"
                        style={{ maxWidth: "100%" }}
                    />
                </div>

                <div className="col-12">
                    <h1 className="mt-4">Invest in everything</h1>

                    <p className="mb-4 fs-5">
                        Online platform to invest in stocks, derivatives, mutual funds, and more
                    </p>

                    <button className="btn btn-primary fs-5 px-4 py-2 mb-5">
                        Signup Now
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Hero;
