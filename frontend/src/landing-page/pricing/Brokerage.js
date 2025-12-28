import React from "react";

function Brokerage() {
return (
    <div className="container text-muted">
        <h2 className="pb-3">Charges Explained</h2>
        <div className="row">
            <div className="col-md-6 col-12">
                <h5 className="pb3">Securities/Commodities transaction tax</h5>
                <p className="py-3">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O. <br/><br/>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                <h5>Transaction/Turnover Charges</h5>
                <p className="py-3">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.<br></br><br></br>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)<br></br><br></br>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.<br></br><br></br>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.<br></br>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                <h5>Account with debit balance</h5>
                <p className="py-3">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
            </div>
            <div className="col-md-6 col-12">
                <h5>GST</h5>
                <p className="py-2">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                <h5>SEBI Charges</h5>
                <p className="py-2">
                    Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                </p>

                <h5>DP (Depository participant) charges</h5>
                <p className="py-2">
                    ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.<br/><br/>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.<br/><br/>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                </p>

                <h5>Pledging charges</h5>
                <p className="py-2">
                    ₹30 + GST per pledge request per ISIN.
                </p>

                <h5>AMC (Account maintenance charges)</h5>
                <p className="py-2">
                    For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="#" className="text-decoration-none">Click here</a> <br/><br/>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="#" className="text-decoration-none">Click here</a> 
                </p>
            </div>
        </div>
        <hr></hr>
        <h5 className="mt-5">Disclaimer</h5>
        <p className="py-3">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
    </div>
);
}

export default Brokerage;
