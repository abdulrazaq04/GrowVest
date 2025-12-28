import React from 'react';

function CreateTicket() {
    return ( 
        <div className='text-muted bg-light pt-4 pb-3'>
            <div className='container d-flex justify-content-between align-items-center'>
            <h2>Support Portal</h2>
            <button className="btn btn-primary fs-md-5 px-4 py-2 ">
                        My tickets
            </button>
            </div>
            <div className='container'>
            <div className="input-group my-5">
                <span className="input-group-text bg-white">
                <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Eg: How do I open my account, How do I activate F&O..."/>
            </div>
            </div>
        </div>
    );
}

export default CreateTicket;