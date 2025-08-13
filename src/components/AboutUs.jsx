import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const developers = [
  {
    name: "Prashant Parshuramkar",
    role: "Handled Frontend and all Template Designs",
    github: "PrashantPKP",
    gitLink: "https://github.com/PrashantPKP",
    linkedin: "prashantparshuramkar9623",
    linLink: "https://www.linkedin.com/in/prashantparshuramkar9623/",
    portfolio: "Prashant-Parshuramkar",
    prtLink: "https://prashantparshuramkar.host20.uk/",
    email: "Prashant-Parshuramkar",
    emailLink: "mailto:prashantparshuramkar9146@gmail.com"
  },
  {
    name: "Nishant Sonar",
    role: "Handled Frontend and backend processing",
    github: "Nishant-sonar",
    gitLink: "https://github.com/Nishant-sonar",
    linkedin: "nishantsonar44",
    linLink: "https://www.linkedin.com/in/nishantsonar44/",
    portfolio: "Nishant-Sonar",
    prtLink: "https://nishanttech.host20.uk/",
    email: "Nishant-Sonar",
    emailLink: "mailto:nishantsonar047@gmail.com"
  },
];

function AboutUs() {
  return (
    <div className="min-h-screen text-gray-100 py-12 px-6 flex flex-col items-center dark:bg-slate-900">
      <div>
        <h1 className="text-2xl font-extrabold text-center mb-2 text-gray-500 md:text-3xl dark:text-amber-300">
          <i className="fas fa-user-alt" /> About Us
        </h1>

        <div className="w-[80%] h-1 bg-gray-600 mx-auto mt-1 rounded dark:bg-amber-400"></div>
        <p className="text-slate-700 dark:text-gray-300 mt-2 mb-10 font-medium">
          © 2025 <a href="https://prashantparshuramkar.host20.uk/" target="_blank" rel="noreferrer">All rights reserved</a>
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col space-y-6">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="w-full bg-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-slate-800"
            style={{ minWidth: "33%" }}
          >
            <div className="flex items-center bg-blue-600 text-xl font-bold p-3 rounded-2xl mb-3">
              <div className="flex items-center justify-center flex-1">
                {dev.name}
              </div>
            </div>

            <p className="text-green-700 mb-6 font-semibold dark:text-blue-300">{dev.role}</p>

            <div className="flex flex-col items-center space-y-4 px-4 md:px-32">
              <div className="flex flex-col md:flex-row justify-between w-full max-w-2xl space-y-4 md:space-y-0 md:space-x-10">
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300">
                  <FaGithub className="text-lg" />
                  <a href={dev.gitLink} title={dev.gitLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.github}</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300">
                  <FaLinkedin className="text-lg" />
                  <a href={dev.linLink} title={dev.linLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.linkedin}</a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between w-full max-w-2xl space-y-4 md:space-y-0 md:space-x-10">
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300">
                  <FaGlobe className="text-lg" />
                  <a href={dev.prtLink} title={dev.prtLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.portfolio}</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300">
                  <FaEnvelope className="text-lg" />
                  <a href={dev.emailLink} title={dev.emailLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.email}</a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
