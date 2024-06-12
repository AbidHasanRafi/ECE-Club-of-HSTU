import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="mt-0 lg:mt-2 grid lg:grid-cols-2 justify-center items-center">
      <div className="lg:ml-2">
        <Slider />
      </div>
      <div className="px-5 lg:px-10">
        <h1 className="text-3xl lg:text-4xl text-center px-10 lg:px-0 lg:text-left mt-5 lg:mt-0 font-extrabold border-b-4 border-solid border-indigo-800 pb-3">
          Welcome to ECE Club of HSTU
        </h1>
        <p className="mt-5 text-justify">
          ECE Club of HSTU serves as the vibrant research platform for students
          pursuing their B.Sc (Engineering) in Electronics and Communication
          Engineering (ECE) at HSTU. Dedicated to fostering academic excellence
          and innovation, the club orchestrates a plethora of workshops and
          technical seminars, cultivating an environment ripe for intellectual
          growth and practical skill development. Through collaborative
          initiatives and expert guidance, students delve into the latest
          advancements in the field, gaining hands-on experience and honing
          their expertise. The club stands as a beacon of academic pursuit,
          empowering students to explore, innovate, and excel in the dynamic
          realm of Electronics and Communication Engineering.
        </p>
      </div>
    </div>
  );
};

export default Hero;
