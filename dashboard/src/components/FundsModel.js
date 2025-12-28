import React, { useState } from "react";
import "./FundsModel.css";

function FundsModel({ type, balance, onClose, onSubmit }) {
    const [amount, setAmount] = useState("");

    return (
        <div className="funds-modal-backdrop">
            <div className="funds-modal">
                <h3>{type === "ADD" ? "Add Funds" : "Withdraw Funds"}</h3>

                <p>Available balance: ₹{balance.toFixed(2)}</p>

                <input
                    type="number"
                    placeholder="Enter amount"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <div className="modal-actions">
                    <button
                        className="btn btn-blue"
                        onClick={() => onSubmit(Number(amount))}
                    >
                        Confirm
                    </button>

                    <button className="btn btn-grey" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FundsModel;
