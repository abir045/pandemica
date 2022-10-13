import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RequestForm from "../components/RequestForm";
import { getRequests } from "../features/assistance/financialSlice";
import { reset } from "../features/auth/authSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { requests, isLading, isError, message } = useSelector(
    (state) => state.requests
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getRequests());

    return () => {
      dispatch(reset);
    };
  }, [user, navigate, dispatch]);

  if (isLading) {
    return <h1>...is Loading</h1>;
  }

  return (
    <div>
      <section className="flex flex-col space-y-5 items-center mt-[10%] ">
        <h1 className="flex font-bold text-4xl ">
          Welcome {user && user.name} you have registered for a positive antigen
          test result
        </h1>
        <p className="flex font-bold text-3xl">
          Financial Assistance Dahsboard{" "}
        </p>
      </section>
      <RequestForm />
    </div>
  );
};

export default Dashboard;
