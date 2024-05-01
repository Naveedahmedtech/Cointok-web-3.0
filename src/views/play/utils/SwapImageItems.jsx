import logoIcon from "../../../assets/icons/default-icon2.png";

const SwapImageItems = ({ platform, subtitle, image, buttonText, path }) => (
  <div className="bg-secondary border-b border-[#323232] flex justify-between items-center rounded-lg my-3 py-4 px-1 md:px-5">
    <div className="flex items-center space-x-1">
      {" "}
      <img
        src={image}
        alt={platform}
        className="h-16 w-auto mr-0 md:mr-5"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = logoIcon;
        }}
      />
      <div className="flex flex-col justify-center items-start text-left">
        <p className="text-text-light font-bold  text-sm md:text-2xl mb-1">
          {platform}
        </p>{" "}
        <p className="text-text-light text-xs md:text-sm">{subtitle}</p>{" "}
      </div>
    </div>
    <div>
      <a
        href={path}
        target="_blank"
        className="bg-text-primary hover:opacity-75 text-text-light font-bold py-3 px-6 md:px-8 rounded-lg transition-opacity duration-150 text-xs md:text-sm cursor-pointer"
      >
        {buttonText}
      </a>
    </div>
  </div>
);

export default SwapImageItems;
