import React from 'react';

function Stats() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">

                {/* Left Content */}
                <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                    <h1 className="fs-2 mb-4 text-center text-lg-start">
                        Trust with confidence
                    </h1>

                    <h2 className="fs-4">Customer-first always</h2>
                    <p className='text-muted'>
                        That's why 1.3 cr customers trust Zerodha with ₹3.5+ lakh crore
                        worth of equity investments.
                    </p>

                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className='text-muted'>
                        No gimmicks, spam, “gamification”, or annoying push notifications.
                    </p>

                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in 30+
                        fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h2 className="fs-4">Do better with money</h2>
                    <p className='text-muted'>
                        With initiatives like Nudge and Kill Switch, we don’t just facilitate
                        transactions—we actively help you do better with your money.
                    </p>
                </div>

                {/* Right Image + Links */}
                <div className="col-lg-6 col-md-12 text-center">
                    <img
                        src="/media/ecosystem.png"
                        alt="Zerodha ecosystem"
                        className="img-fluid mb-4"
                        style={{ maxWidth: "80%" }}
                    />

                    <div className="d-flex justify-content-center gap-4 flex-wrap">
                        <a href="#" className="text-decoration-none">
                            Explore our products <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                            Try Kite demo <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;
