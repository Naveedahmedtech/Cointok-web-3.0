import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaShieldAlt } from "react-icons/fa";
import safety from "../../../assets/common/safty.png";
import check from "../../../assets/icons/check.png";
import cross from "../../../assets/icons/cross.png";
import useWindowSize from "../../../hooks/useWindowSize";
import { checksData } from "../../../utils/dummyData";


const SafetyChecks = () => {
  const [showAll, setShowAll] = useState(false);
  const windowSize = useWindowSize(); // Custom hook to get window size

  useEffect(() => {
    setShowAll(false);
  }, [windowSize]);

  const visibleChecks = windowSize.width < 768 ? 1 : 5; // 768px is sm breakpoint in Tailwind

  return (
    <div className="bg-secondary border-b-2 border-[#323232] py-5 rounded-lg shadow-lg">
      <div className="flex justify-center items-center mb-6 border-b-2 border-[#323232] pb-4">
        <h3 className="text-2xl text-text-light font-bold me-2">
          Safety Checks
        </h3>
        <img src={safety} alt="Safety" />
      </div>
      {checksData
        .slice(0, showAll ? checksData.length : visibleChecks)
        .map(({ id, text, status }, index, array) => (
          <div
            key={id}
            className={`flex items-center justify-between mb-5 ${
              index === array.length - 1 ? "" : "border-b-2 border-[#323232]"
            } px-5 py-2`}
          >
            <div className="flex items-center">
              {/* <FaShieldAlt className="text-xl text-text-light mr-2" /> */}
              <img src={safety} alt="" className="mr-2" />
              <span className="flex-1 text-text-light text-sm">{text}</span>
            </div>
            {status ? (
              <div className="flex items-center text-green-500">
                <span>Yes</span>
                <img src={check} alt="" className="h-4 w-auto ml-2" />
              </div>
            ) : (
              <div className="flex items-center text-red-500">
                <span>No</span>
                <img src={cross} alt="" className="h-4 w-auto ml-2" />
              </div>
            )}
          </div>
        ))}

      {!showAll ? (
        <p
          className="border-t border-[#323232] text-text-light px-4 py-2 text-center rounded mt-4 cursor-pointer block md:hidden"
          onClick={() => setShowAll(true)}
        >
          <span className="border-2 border-text-primary rounded-full inline-block px-5 py-2">
            Show more
          </span>
        </p>
      ) : (
        <p
          className="border-t border-[#323232] text-text-light px-4 py-2 text-center rounded mt-4 cursor-pointer block md:hidden"
          onClick={() => setShowAll(false)}
        >
          <span className="border-2 border-text-primary rounded-full inline-block px-5 py-2">
            Show less
          </span>
        </p>
      )}
    </div>
  );
};

export default SafetyChecks;
