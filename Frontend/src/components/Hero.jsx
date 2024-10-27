import Girl from "../assets/girl.png";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img src={Girl} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="max-w-xl">
            <h1 className="text-5xl font-semibold">
              Your Gateway to Extraordinary Finds
            </h1>
            <p className="py-6">
              Unlock deals, bid smart, and sieze the moment with our online
              bidding bonanza!
            </p>
            <button className="btn bg-gradient-to-r from-blue-500 to-blue-300 text-white border-none hover:from-blue-600 hover:to-blue-400 rounded-3xl">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
