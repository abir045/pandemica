import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRequest } from "../features/assistance/financialSlice";

const RequestForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createRequest({ text }));
    setText("");
  };

  return (
    <div>
      <section className="flex flex-col items-center mt-[5%] mb-[5%] w-full">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col space-y-5 ">
            <label htmlFor="text" className="font-bold text-2xl">
              Submit your Request in detail for financial assistance
            </label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your Request..."
            />
          </div>
          <button
            className="bg-[#44B564] font-bold text-white p-2 hover:text-[#44B564] hover:bg-white rounded w-full mt-[10%]"
            type="submit"
          >
            Add Request
          </button>
        </form>
      </section>
    </div>
  );
};

export default RequestForm;
