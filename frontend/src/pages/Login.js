import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section className="flex space-x-5 mx-[10%] items-center">
        <FaSignInAlt size={30} />
        <h1 className="text-3xl font-bold">
          Login and apply for financial assistance
        </h1>
      </section>
      <section>
        <form className="flex flex-col mx-[10%] " onSubmit={onSubmit}>
          <input
            className="my-5"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
          <input
            className="my-5"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />

          <button className="flex bg-black text-white text-center justify-center p-2 w-full rounded-xl">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
