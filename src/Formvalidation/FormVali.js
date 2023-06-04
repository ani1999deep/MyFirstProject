import React, { useState } from "react";

const FormVali = () => {
  const [firstname, setFristname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstname.length == 0 || lastname.length == 0) {
      setError(true);
    }
    if (firstname && lastname) {
      console.log("First Name is :", firstname, "\nLast Name is :", lastname);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="First Name"
            onChange={(e) => setFristname(e.target.value)}
          />
        </div>

        <div>
          {error && firstname.length <= 0 ? (
            <label>First Name can not be empty</label>
          ) : (
            ""
          )}
        </div>

        <div>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          {error && lastname.length <= 0 ? (
            <label>Last Name can not be empty</label>
          ) : (
            ""
          )}
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default FormVali;
