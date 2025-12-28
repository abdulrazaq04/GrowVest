import React from 'react';

function NotFound() {
    return ( 
        <div className="container py-5">
            <div className="row text-center">
                <div className="col-12">
                    <h1 className="mt-4 mb-4">404 Not Found</h1>
                    <p className="mb-4 fs-5">
                        Sorry, You are looking for page does not exist.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default NotFound;