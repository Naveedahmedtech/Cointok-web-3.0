import logoIcon from "../../../assets/icons/default-icon2.png";
import Badge from "../../../components/badge/Badge";

const LogoSection = ({ details }) => {
  return (
    <div className="flex items-center flex-wrap bg-secondary border-2 border-[#323232] gap-5 p-5 rounded-lg">
      <img
        src={details?.coin_picture || logoIcon}
        alt=""
        className="w-auto h-32"
      />
      <div>
        <div className="flex my-2 mb-5">
          <p className="text-text-primary font-bold text-xl me-2">
            {details?.coin_name}
          </p>
          <p className="text-text-secondary font-bold text-xl">
            {details?.coin_symbol}
          </p>
        </div>
        <Badge className="text-text-light">Swap</Badge>
      </div>
    </div>
  );
};

export default LogoSection;
