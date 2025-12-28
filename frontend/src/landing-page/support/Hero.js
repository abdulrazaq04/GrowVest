import React from "react";

function Hero() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">
              <i class="fa-solid fa-plus"></i>
            </label>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Account Opening</option>
              <option value="1">Minor</option>
              <option value="2">Non Resident Indian (NRI)</option>
              <option value="3">Glossy</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">
              <i class="fa-solid fa-circle-user"></i>
            </label>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Your Zerodha Account</option>
              <option value="1">Your Profile</option>
              <option value="2">Axxount Modification</option>
              <option value="3">Nomination</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">
              ₹
            </label>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Funds</option>
              <option value="1">Add Money</option>
              <option value="2">Withdraw Money</option>
              <option value="3">Add Bank Accounts</option>
              <option value="4">eMandates</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">
              <i class="fa-solid fa-c"></i>
            </label>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Mutual Funds</option>
              <option value="1">Features on coin</option>
              <option value="2">Payments and orders</option>
              <option value="3">General</option>
            </select>
          </div>
        </div>

        <div className="col-md-4 mt-4 mt-md-0">
            <div className="py-4" style={{ backgroundColor: "#fff4e7ff",borderLeft: "10px solid #F7931A" }}>
                <ul >
                    <li className="pb-3">
                        <a href="#">Introduction of new F&O contracts on 4 individual securities</a>
                    </li>
                    <li>
                        <a href="#">Surveillance measure on scrips - December 2025</a>
                    </li>
                </ul>
            </div>

          <div className="table-responsive mt-5">
            <table className="table table-bordered-light align-middle">
              {/* Header */}
              <thead className="table-light">
                <tr>
                  <th className="py-3">Quick Links</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                <tr className="bg-white">
                  <td className="py-3">
                    <a href="#" className="text-decoration-none">
                      1. Track account opening
                    </a>
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="py-3">
                    <a href="#" className="text-decoration-none">
                      2. Track segment activation
                    </a>
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="py-3">
                    <a href="#" className="text-decoration-none">
                      3. Intraday margins
                    </a>
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="py-3">
                    <a href="#" className="text-decoration-none">
                      4. Kite user manual
                    </a>
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="py-3">
                    <a href="#" className="text-decoration-none">
                      5. Learn how to create a ticket
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
