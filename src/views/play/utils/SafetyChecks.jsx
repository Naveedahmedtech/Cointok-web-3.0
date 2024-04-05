import React, { useState } from "react";
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
    id: 4,
    text: "Firewall",
    status: false,
  },
  {
    id: 5,
    text: "Encryption",
    status: true,
  },
];

const SafetyChecks = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-secondary border-2 border-[#323232] p-5 rounded-lg shadow-lg">
      <div className="flex justify-center items-center mb-6">
        <h3 className="text-2xl text-text-light font-bold me-2">
          Safety Checks
        </h3>
        <img src={safty} alt="Safety" />
      </div>
      {checksData
        .slice(0, showAll ? checksData.length : 1)
        .map(({ id, text, status }) => (
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
      {!showAll && (
        <p
          className="border-t border-[#323232] text-text-light px-4 py-2 text-center rounded mt-4 block md:hidden"
          onClick={() => setShowAll(true)}
        >
          <p className="border-2 border-text-primary rounded-full inline-block px-5 py-2">
            Show more
          </p>
        </p>
      )}
      {showAll && (
        <p
          className="border-t border-[#323232] text-text-light px-4 py-2 text-center rounded mt-4  block md:hidden"
          onClick={() => setShowAll(false)}
        >
          <p className="border-2 border-text-primary rounded-full inline-block px-5 py-2">
            Show less
          </p>
        </p>
      )}
    </div>
  );
};

export default SafetyChecks;
