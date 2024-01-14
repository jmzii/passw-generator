import React, { useState, useEffect } from "react";
import { FaClone } from "react-icons/fa";
import generatePassword from "./passwordGenerator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// basic app functionality
function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");

  useEffect(() => {
    console.log("Generated Password:", generatedPassword);
  }, [generatedPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const length = parseInt(document.getElementById("length").value, 10);
    const useNumber = document.getElementById("number").checked;
    const useUppercase = document.getElementById("uppercase").checked;
    const useSymbol = document.getElementById("symbol").checked;

    const password = generatePassword(
      length,
      useNumber,
      useUppercase,
      useSymbol
    );
    setGeneratedPassword(password);
  };

  // clipboard functionality, shows notification if pwd is copied
  const handleCopyClick = () => {
    navigator.clipboard.writeText(generatedPassword);
    toast("Password copied!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // styling and putting everything together
  return (
    <section>
      <ToastContainer />
      <div className="container">
        <form id="pwd-form" onSubmit={handleSubmit}>
          <div className="result">
            <input
              type="text"
              id="result"
              placeholder="Waiting..."
              value={generatedPassword}
              readOnly
            />
            <div className="copyPwd" onClick={handleCopyClick}>
              <FaClone />
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input
                type="number"
                id="length"
                min={12}
                max={20}
                defaultValue={12}
              />
            </div>
            <div className="field">
              <label htmlFor="number">Number</label>
              <input type="checkbox" id="number" />
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
