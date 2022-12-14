import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password != password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  // if (isLoading) {
  //   return "...is Loading";
  // }

  return (
    <div>
      <section className="flex space-x-5 mx-[10%] items-center mt-[10%]">
        <FaUser size={30} />
        <h1 className="text-2xl lg:text-3xl font-bold">
          Register for a positive antigen test
        </h1>
      </section>
      <section className="mb-[35%] ">
        <form className="flex flex-col mx-[10%] " onSubmit={onSubmit}>
          <input
            className="my-5 px-5 py-2 rounded"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name..."
            onChange={onChange}
          />
          <input
            className="my-5 px-5 py-2 rounded"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email..."
            onChange={onChange}
          />
          <input
            className="my-5 px-5 py-2 rounded"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password..."
            onChange={onChange}
          />
          <input
            className="my-5 px-5 py-2 rounded"
            type="password"
            id="password2"
            name="password2"
            value={password2}
            placeholder="Confirm your password..."
            onChange={onChange}
          />

          <button className="flex bg-[#44B564] text-white  hover:text-[#44B564] hover:bg-white text-center justify-center p-2 w-full rounded-xl">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
