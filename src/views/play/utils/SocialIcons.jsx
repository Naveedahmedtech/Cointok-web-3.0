import logoIcon from "../../../assets/icons/default-icon2.png";

const socialImages = [logoIcon, logoIcon, logoIcon, logoIcon, logoIcon];

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-5 my-10">
      {socialImages.map((image) => (
        <img src={image} alt="" className="w-auto h-8" />
      ))}
    </div>
  );
};

export default SocialIcons;
