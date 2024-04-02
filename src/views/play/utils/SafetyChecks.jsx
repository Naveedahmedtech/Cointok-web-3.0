import React from "react";
import { FaCheckCircle, FaTimesCircle, FaShieldAlt } from "react-icons/fa";

const checksData = [
  {
    id: 1,
    text: "SSL Certificate",
    status: true,
  },
  {
    id: 2,
    text: "Privacy Policy",
    status: false,
  },
  {
    id: 3,
    text: "Two-Factor Authentication",
    status: true,
  },
  {
    id: 3,
    text: "Two-Factor Authentication",
    status: true,
  },
  {
    id: 3,
    text: "Two-Factor Authentication",
    status: true,
  },
  {
    id: 3,
    text: "Two-Factor Authentication",
    status: true,
  },
  {
    id: 3,
    text: "Two-Factor Authentication",
    status: true,
  },
  {
    id: 3,
    text: "Two-Factor Authentication",
    status: true,
  },
];

const SafetyChecks = () => {
  return (
    <div className="bg-secondary mt-5 p-5 rounded-lg shadow-lg">
      <div className="flex justify-center items-center mb-6">
        <h3 className="text-2xl text-text-light font-bold">Safety Checks</h3>
        <FaShieldAlt className="text-3xl text-text-light ml-3" />
      </div>
      {checksData.map(({ id, text, status }) => (
        <div key={id} className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaShieldAlt className="text-xl text-text-light mr-2" />
            <span className="flex-1 text-text-light text-lg">{text}</span>
          </div>
          {status ? (
            <div className="flex items-center text-green-500">
              <span>Yes</span>
              <FaCheckCircle className="ml-2" />
            </div>
          ) : (
            <div className="flex items-center text-red-500">
              <span>No</span>
              <FaTimesCircle className="ml-2" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SafetyChecks;
