import React from "react";
import { FaClone } from "react-icons/fa";

function App() {
  return (
    <section>
      <div className="container">
        <form id="pwd-form">
          <div className="result">
            <input
              type="text"
              id="result"
              placeholder="Minimum of 12 characters"
              readOnly
            />
            <div className="copyPwd">
              <FaClone />
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input type="number" id="length" min={12} max={20} />
            </div>
            <div className="field">
              <label htmlFor="capital">Capital</label>
              <input type="checkbox" id="capital" />
            </div>
            <div className="field">
              <label htmlFor="lowercase">Lowercase</label>
              <input type="checkbox" id="lowercase" />
            </div>
            <div className="field">
              <label htmlFor="uppercase">Uppercase</label>
              <input type="checkbox" id="uppercase" />
            </div>
            <div className="field">
              <label htmlFor="symbol">Symbol</label>
              <input type="checkbox" id="symbol" />
            </div>
          </div>
          <button type="submit">Create password</button>
        </form>
      </div>
    </section>
  );
}

export default App;
