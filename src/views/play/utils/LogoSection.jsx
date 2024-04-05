import logoIcon from "../../../assets/icons/default-icon2.png";
import Badge from "../../../components/badge/Badge";

const LogoSection = () => {
  return (
    <div className="flex items-center flex-wrap bg-secondary border-2 border-[#323232] gap-5 p-5 rounded-lg">
      <img src={logoIcon} alt="" className="w-auto h-32" />
      <div>
        <div className="flex my-2">
          <p className="text-text-primary me-2">SHIBA PLAY</p>
          <p className="text-text-light">SHIB</p>
        </div>
        <Badge className="text-text-secondary">Swap</Badge>
      </div>
    </div>
  );
};

export default LogoSection;
