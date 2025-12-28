import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FundsModel from "./FundsModel";

const Funds = () => {
  const [balance, setBalance] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // "ADD" | "WITHDRAW"


  useEffect(() => {
    const fetchBalance = async () => {
      const res = await axios.get("http://localhost:3002/balance", {
        withCredentials: true,
      });
      setBalance(res.data.amount);
    };

    fetchBalance();
  }, []);


  const openAddFunds = () => {
    setModalType("ADD");
    setIsModalOpen(true);
  };

  const openWithdrawFunds = () => {
    setModalType("WITHDRAW");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };
  const handleFundSubmit = async (amount) => {
    try {
      if (modalType === "ADD") {
        await axios.post(
          "http://localhost:3002/addFunds",
          { amount },
          { withCredentials: true }
        );
      }

      if (modalType === "WITHDRAW") {
        await axios.post(
          "http://localhost:3002/withdrawFunds",
          { amount },
          { withCredentials: true }
        );
      }

      // 🔁 Refresh balance after update
      const res = await axios.get("http://localhost:3002/balance", {
        withCredentials: true,
      });
      setBalance(res.data.amount);

      closeModal();
    } catch (err) {
      alert(err.response?.data?.message || "Transaction failed");
    }
  };


  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green" onClick={openAddFunds}>Add funds</Link>
        <Link className="btn btn-blue" onClick={openWithdrawFunds}>Withdraw</Link>

      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{balance.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{balance.toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{balance.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <FundsModel
          type={modalType}
          balance={balance}
          onClose={closeModal}
          onSubmit={handleFundSubmit}
        />
      )}

    </>
  );
};

export default Funds;
