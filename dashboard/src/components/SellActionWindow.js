import React, { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const generalContext = useContext(GeneralContext);

    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);
    const [popup, setPopup] = useState({ open: false, msg: "", type: "success" });

    const handleSellClick = async () => {
        try {
            const res = await axios.post("http://localhost:3002/sellOrder", {
                name: uid,
                qty:qty,
                price: price,
            });

            setPopup({
                open: true,
                msg: res.data.message,
                type: "success",
            });

            setTimeout(() => {
                generalContext.closeSellWindow();
            }, 800);
        } catch (err) {
            setPopup({
                open: true,
                msg: err.response?.data?.message || "Sell failed",
                type: "error",
            });
        }
    };

    return (
        <>
            <div className="containerClass" id="sell-window">
                <div className="regular-order">
                    <div className="inputs">
                        <fieldset>
                            <legend>Qty.</legend>
                            <input
                                type="number"
                                value={qty}
                                onChange={(e) => setQty(+e.target.value)}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Price</legend>
                            <input
                                type="number"
                                step="0.05"
                                value={price}
                                onChange={(e) => setPrice(+e.target.value)}
                            />
                        </fieldset>
                    </div>
                </div>

                <div className="buttons">
                    <span>Sell Order</span>
                    <div>
                        <button className="btn btn-red" onClick={handleSellClick}>
                            Sell
                        </button >
                        <button 
                            className="btn btn-grey"
                            onClick={generalContext.closeSellWindow}
                        >
                            Cancel
                        </button >
                    </div>
                </div>
            </div>

            <Snackbar
                open={popup.open}
                autoHideDuration={2500}
                onClose={() => setPopup({ ...popup, open: false })}
            >
                <Alert severity={popup.type} variant="filled">
                    {popup.msg}
                </Alert>
            </Snackbar>
        </>
    );
};

export default SellActionWindow;
