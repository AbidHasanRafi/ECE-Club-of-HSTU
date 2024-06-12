import img from "../../assets/white-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white p-10">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        <aside className="flex flex-col items-center md:items-start md:w-1/3">
          <img className="w-1/3 mb-1" src={img} alt="ECE Club of HSTU" />
          <p className="text-center md:text-left md:pr-20">
            <span className="text-xl font-bold">ECE Club of HSTU</span>
            <br />
            The research platform of the students of B.Sc (Engineering) in ECE
            at HSTU.
          </p>
        </aside>
        <div className="flex md:flex-row md:w-2/3 justify-between gap-8">
          <nav>
            <h6 className="text-lg font-bold mb-4">Department</h6>
            <ul>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/cse/ece#fac_mem"
                >
                  Faculty Member
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/cse/ece#research"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/cse/ece#off_staff"
                >
                  Officer & Staff
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/cse/ece#curriculam"
                >
                  Curriculum
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 className="text-lg font-bold mb-4">University</h6>
            <ul>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/about_us/overview"
                >
                  About HSTU
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/page/faculties_and_departments"
                >
                  Faculty & Dept.
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/page/admin_bodies"
                >
                  Admin Bodies
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/page/office_section"
                >
                  Office & Section
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 className="text-lg font-bold mb-4">Campus</h6>
            <ul>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/page/news_events"
                >
                  News & Events
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/page/medical"
                >
                  Medical
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://library.hstu.ac.bd/"
                >
                  Library
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500"
                  href="https://hstu.ac.bd/page/transport"
                >
                  Transport
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-full flex justify-between items-center flex-col pt-5 mt-5 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white"></p>
        <div className="flex flex-row md:mt-0 mt-6">
          <p className="font-poppins font-light text-center text-[15px] lg:text-[18px] leading-[27px] text-white">
            Copyright Ⓒ {currentYear} - ECE Club of HSTU.{" "}
            <br className="lg:hidden" />
            Developed by -{" "}
            <a
              className="hover:underline hover:text-blue-500"
              href="https://www.linkedin.com/in/abid-hasan-rafi/"
            >
              Md. Abid Hasan Rafi (ECE-21)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
