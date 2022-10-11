import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
        <FaUser size={30} />
        <h1 className="text-3xl font-bold">
          Register for a positive antigen test
        </h1>
      </section>
      <section>
        <form className="flex flex-col mx-[10%] " onSubmit={onSubmit}>
          <input
            className="my-5"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
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
          <input
            className="my-5"
            type="password"
            id="password2"
            name="password2"
            value={password2}
            placeholder="Confirm your password"
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

export default Register;
