import React from "react";
import { FaCheckCircle, FaTimesCircle, FaShieldAlt } from "react-icons/fa";
import safty from "../../../assets/common/safty.png";

const checksData = [
  {
    id: 1,
    text: "Honeypot",
    status: true,
  },
  {
    id: 2,
    text: "Mint",
    status: false,
  },
  {
    id: 3,
    text: "Pause",
    status: true,
  },
  {
    id: 1,
    text: "Honeypot",
    status: true,
  },
  {
    id: 2,
    text: "Mint",
    status: false,
  },
  {
    id: 3,
    text: "Pause",
    status: true,
  },
];

const SafetyChecks = () => {
  return (
    <div className="bg-secondary mt-5 p-5 rounded-lg shadow-lg">
      <div className="flex justify-center items-center mb-6">
        <h3 className="text-2xl text-text-light font-bold me-2">
          Safety Checks
        </h3>
        <img src={safty} />
      </div>
      {checksData.map(({ id, text, status }) => (
        <div key={id} className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaShieldAlt className="text-xl text-text-light mr-2" />
            <span className="flex-1 text-text-light text-sm">{text}</span>
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
