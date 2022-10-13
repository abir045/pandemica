import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RequestForm from "../components/RequestForm";

const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

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
