import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const ErrorNotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <div className="text-6xl">
      {/* <AiOutlineFrownCircle /> */}
    </div>
    <h1 className="text-4xl font-bold mt-5 text-text-light">
      404 - Page Not Found
    </h1>
    <p className="mt-2 text-text-light">
      Oops! The page you are looking for does not exist.
    </p>
    <div className="mt-5">
      <Link
        to="/"
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        <AiOutlineHome className="mr-2 text-text-light" /> Go to Homepage
      </Link>
    </div>
  </div>
);

export default ErrorNotFound;
