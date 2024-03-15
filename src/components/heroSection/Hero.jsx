const Hero = () => {
  return (
    <div className="px-6">
      <div
        className="hero h-[600px] rounded-3xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/KN5LrvQ/Rectangle-1-1.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" text-white lg:w-4/6 w-full space-y-8">
            <h1 className="mb-5 lg:text-5xl text-2xl font-bold">Discover an exceptional cooking  class tailored for you!</h1>
            <p className="mb-5 opacity-80">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.
            </p>
            <button className="btn rounded-full px-8 bg-[#0BE58A] text-white outline-none border-none lg:mr-12 md:mr-12 mr-4 mb-5 hover:bg-[#0BE58A]">Explore Now</button>
            <button className=" btn rounded-full px-8 bg-transparent text-white border-1 border-white hover:bg-[#0BE58A]">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
