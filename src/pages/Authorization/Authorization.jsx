import { useEffect, useState } from "react";
import firebase from "firebase";

const Authorization = () => {
  return (
    <>
      <div className="flex flex-col">
        <input
          id="email"
          type="text"
          className="mb-2 rounded"
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          className="mb-2 rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-white rounded border border-white"
          onClick={signUpUser}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Authorization;
