import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/chat.png";

export default function Home() {
  return (
    <div>
      <section className="container bg-success bg-opacity-25">
        <div className="p-lg-5">
          <div className="container text-center">
            <h1 className="display-5">¡Welcome to Chatty!</h1>
            <p className="lead">
              Chatty is a messaging application for you to communicate with your
              friends and family
            </p>
            <img src={img1} width="300" />
            <div className="mt-3">
                <Link className="btn btn-success" to="/signup">
                  Create account
                </Link>
            </div>
            <div className="mt-3">
              <Link className="btn btn-success" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
