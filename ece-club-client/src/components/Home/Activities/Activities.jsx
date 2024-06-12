import { IoArrowRedoCircle } from "react-icons/io5";
import img_1 from "../../../assets/activities_assets/innovation.jpg";
import img_2 from "../../../assets/activities_assets/workshop.jpg";
import img_3 from "../../../assets/activities_assets/sports.jpg";
import img_4 from "../../../assets/activities_assets/cultural.jpeg";

const Activities = () => {
  const points = [
    {
      title: "Technological Research and Innovation",
      image: img_1,
      items: [
        "Research Practices: Engage in cutting-edge research projects that push the boundaries of current technological capabilities.",
        "Project Presentations: Provide a platform for students to present their innovative projects, receiving feedback and recognition.",
        "Collaboration: Foster collaborations between students and industry professionals to work on impactful projects.",
        "Innovation Labs: Access to state-of-the-art labs and equipment to bring your ideas to life.",
      ],
    },
    {
      title: "Technical Workshops",
      image: img_2,
      items: [
        "Skill Development: Organize workshops on various technical topics to enhance practical knowledge and skills.",
        "Expert Sessions: Host sessions with industry experts and academics to share insights and latest trends in technology.",
        "Hands-On Training: Practical sessions to apply theoretical knowledge in real-world scenarios.",
        "Certifications: Obtain certifications upon completing workshops to add value to your resume.",
      ],
    },
    {
      title: "Sports Events",
      image: img_3,
      items: [
        "Physical Well-being: Promote a healthy lifestyle through regular sports events and activities.",
        "Team Spirit: Encourage teamwork and camaraderie among members through various sports tournaments.",
        "Inter-Club Competitions: Participate in friendly competitions with other clubs and organizations.",
        "Fitness Programs: Regular fitness and wellness programs to keep members in top shape.",
      ],
    },
    {
      title: "Cultural Events",
      image: img_4,
      items: [
        "Cultural Heritage: Celebrate our rich cultural heritage through events and festivals.",
        "Artistic Expression: Provide a stage for students to showcase their artistic talents and creativity.",
        "Diversity: Promote diversity and inclusion through multicultural events and activities.",
        "Talent Shows: Host talent shows and competitions to recognize and reward creative talents.",
      ],
    },
  ];

  return (
    <div className="max-w-full mx-auto my-12 px-4 md:px-0">
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 header-animation">
          What We Do
        </h2>
      </div>
      <div className="space-y-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="bg-white mx-2 lg:mx-5 rounded-lg border border-gray-200 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-1">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-full object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                />
              </div>
              <div className="col-span-2 p-6 flex flex-col justify-center border-l border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {point.title}
                </h3>
                <ul className="text-gray-700 space-y-2">
                  {point.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div>
                        <IoArrowRedoCircle className="text-blue-500 text-xl m-1" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
