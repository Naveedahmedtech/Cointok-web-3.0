import React from "react";
import upIcon from "../../assets/icons/up-icon.png";
import Text from "../text/Text";

const PromoteCoinButton = () => {
  return (
    <div className="border-2 border-text-primary px-2 py-2 flex justify-between items-center rounded-full my-10 max-w-[250px]">
      <Text className="text-text-primary">Promote Your Coin</Text>
      <div className="text-text-light">|</div>
      <img src={upIcon} alt="Up icon" className="w-auto h-6" />
    </div>
  );
};

export default PromoteCoinButton;

// import React from "react";
// import upIcon from "../../assets/icons/up-icon.png";
// import Text from "../text/Text";

// const PromoteCoinButton = () => {
//   return (
//     <div className="border-2 border-text-primary px-4 py-2 flex justify-between items-center rounded-full my-10 sm:w-5/6 md:w-1/2 lg:w-1/4 xl:w-1/6">
//       <Text className="text-text-primary">Promote Your Coin</Text>
//       <div className="text-text-light mx-3">|</div>
//       <img src={upIcon} alt="Up icon" className="w-auto h-6" />
//     </div>
//   );
// };

// export default PromoteCoinButton;
