import React from "react";

function TableCharges() {
  return (
    <div className="container text-muted my-5">
      <h3 className="mb-4">Charges for account opening</h3>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Online account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-5">Demat AMC (Annual Maintenance Charge)</h3>
      <div className="table-responsive">
        <table className="table table-bordered">
            <thead className="table-light">
                <tr>
                    <th>Value holdings</th>
                    <th>AMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Up to ₹4 lakh
                    </td>
                    <td>
                        Free
                    </td>
                </tr>
                <tr>
                    <td>
                        ₹4 lakh - ₹10 lakh
                    </td>
                    <td>
                        ₹ 100 per year, charged quarterly*
                    </td>
                </tr>
                <tr>
                    <td>
                        Above ₹10 lakh
                    </td>
                    <td>
                        ₹ 300 per year, charged quarterly
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCharges;
