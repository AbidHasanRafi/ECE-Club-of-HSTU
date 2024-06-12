import img_1 from "../../../assets/mission_assets/innovation.jpg";
import img_2 from "../../../assets/mission_assets/skill.png";
import img_3 from "../../../assets/mission_assets/holo.png";

const Mission = () => {
  const missions = [
    {
      title: "Promote Technological Innovation",
      image: img_1,
      description:
        "We encourage groundbreaking research and development in the field of electronics and communication engineering.",
    },
    {
      title: "Enhance Technical Skills",
      image: img_2,
      description:
        "Through hands-on workshops, technical sessions, and project presentations, we aim to equip our members with the necessary skills to thrive in a rapidly evolving technological landscape.",
    },
    {
      title: "Foster Holistic Development",
      image: img_3,
      description:
        "Beyond academics, we emphasize the importance of sports and cultural activities, ensuring a well-rounded development for our members.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 header-animation">
          Our Mission
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="bg-white m-3 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="relative">
              <img
                src={mission.image}
                alt={mission.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-75"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white text-center z-10">
                  {mission.title}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700">{mission.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
