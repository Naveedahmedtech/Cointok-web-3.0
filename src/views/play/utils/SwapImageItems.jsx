const SwapImageItems = ({ platform, subtitle, image, buttonText }) => (
  <div className="bg-secondary p-5 grid grid-cols-1 md:grid-cols-3 gap-5 items-center rounded-lg">
    <div className="flex justify-center">
      <img src={image} alt={platform} className="w-auto h-16" />
    </div>
    <div className="flex flex-col items-center text-center">
      <p className="text-text-light">{platform}</p>
      <p className="text-text-light">{subtitle}</p>
    </div>
    <div className="flex justify-center">
      <button className="bg-text-primary hover:opacity-50 text-text-light font-bold py-2 px-6 rounded-lg transition-colors duration-150">
        {buttonText}
      </button>
    </div>
  </div>
);

export default SwapImageItems;
