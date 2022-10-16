import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RequestForm from "../components/RequestForm";
import { getRequests } from "../features/assistance/financialSlice";
import { reset } from "../features/auth/authSlice";
import RequestItem from "../components/RequestItem";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { requests, isLoading, isError, message } = useSelector(
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
      dispatch(reset());
    };
  }, [user, dispatch, navigate]);

  if (isLoading) {
    return <h1>...is Loading</h1>;
  }

  console.log(requests);

  return (
    <div>
      <section className="flex flex-col space-y-5 items-center mt-[10%] mx-[5%] lg:mx-0">
        <h1 className="flex font-semibold text-xl lg:text-4xl ">
          Welcome {user && user.name}, <br /> you have registered for a positive
          antigen test result
        </h1>
        <p className="flex font-bold text-[22px] lg:text-3xl">
          Financial Assistance Dahsboard{" "}
        </p>
        <hr className="border-[3px] border-[#64cf83] mt-5 mx-auto  border-solid  w-[40%]" />
      </section>
      <RequestForm />
      <section className="flex flex-col ">
        {requests.length > 0 ? (
          <div>
            {requests.map((request) => {
              return <RequestItem key={request._id} request={request} />;
            })}
          </div>
        ) : (
          <h3>You have not sent any request</h3>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
