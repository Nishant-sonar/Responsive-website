

export default function ViewTemplates() {
  // const titles=["","Simpler & Structured","Linear & Classic","Colourful & Attractive","Colourful & Highly Designed","Simpler & Linear","Highly Simpler & Classic"]
  const titles = ["",
  "Default Classic",
  "Simpler & Structured",
  "Linear & Classic",
  "Colourful & Attractive",
  "Colourful & Highly Designed",
  "Simpler & Linear",
  "Highly Simpler & Classic",
  "Elegant Modern Touch",
  "Creative Blocks",
  "Minimalist Professional",
  "Tech-Focused Resume",
  "Bold & Visual Design"
];

  const items = [
    {
      img: "/Resume-builder/Temp/cv1.png",
      title: titles[1],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv1.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv1.html",
    },
    {
      img: "/Resume-builder/Temp/cv2.png",
      title: titles[2],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv2.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv2.html",   
    },
    {
      img: "/Resume-builder/Temp/cv3.png",
      title: titles[3],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv3.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv3.html",
    },
    {
      img: "/Resume-builder/Temp/cv4.png",
      title: titles[4],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv4.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv4.html",
    },
    {
     img: "/Resume-builder/Temp/cv5.png",
     title: titles[5],
     codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv5.html",
     templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv5.html",
    },

    {
      img: "/Resume-builder/Temp/cv6.png",
      title: titles[6],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv6.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv6.html",
    },
    {
      img: "/Resume-builder/Temp/cv7.png",
      title: titles[7],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv7.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv7.html",
    },
    {
      img: "/Resume-builder/Temp/cv8.png",
      title: titles[8],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv8.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv8.html",
    },
    {
      img: "/Resume-builder/Temp/cv9.png",
      title: titles[9],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv9.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv9.html",
    },
    {
      img: "/Resume-builder/Temp/cv10.png",
      title: titles[10],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv10.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv10.html",
    },
        {
      img: "/Resume-builder/Temp/cv11.png",
      title: titles[11],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv11.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv11.html",
    },
        {
      img: "/Resume-builder/Temp/cv12.png",
      title: titles[12],
      codeLink: "https://github.com/PrashantPKP/cv-templates/blob/main/cv12.html",
      templateLink: "https://prashantparshuramkar.host20.uk/cv-templates/cv12.html",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900 p-4">
      <h3 className="mt-10 mb-2 text-3xl text-gray-600 dark:text-slate-200 font-bold">Generated Templates</h3>
      <h5 className="mb-4 text-sm md:text-base font-semibold text-gray-500">Note: Consider to View Templates only on desktop mode</h5>
      <div className="w-[200px] h-1 bg-blue-700 mb-16 mx-auto mt-1 rounded dark:bg-blue-500"></div>

      {/* Change grid-cols-1 to grid-cols-2 for mobile */}
      <div className="grid grid-cols-2 gap-14 sm:grid-cols-2 md:grid-cols-2 max-w-5xl mx-auto place-items-center">
        {items.map((item, index) => (
          <div key={index} className="group relative mb-6 bg-white dark:bg-slate-700 hover:shadow-2xl hover:scale-105 transition-transform duration-[250ms] border-2 dark:shadow-[0_-4px_10px_rgba(0,0,0,0.1)]  border-gray-300 dark:border-gray-700 dark:shadow-gray-800 dark:hover:shadow-gray-600/50 rounded-lg overflow-hidden w-40 sm:w-44 md:w-48 lg:w-64 xl:w-72 flex flex-col items-center">
            {/* Adjust image size */}
            <img src={item.img} alt={item.title} className="w-full h-auto object-cover dark:opacity-80 dark:brightness-80 dark:contrast-90" />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 dark:bg-slate-700 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-transform flex space justify-between flex-col items-center">
              <div className="flex space-x-4">
                <div className="flex space-x-2">
                  <a href={item.codeLink} className="text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md md:hidden" target="_blank">
                    Code
                  </a>
                  <a href={item.templateLink} className="text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md md:hidden" target="_blank">
                    View
                  </a>
                  <a href={item.codeLink} className="text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md hidden md:block" target="_blank">
                    View Code
                  </a>
                  <a href={item.templateLink} className="text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md hidden md:block" target="_blank">
                    View Resume
                  </a>
                </div>
        
              </div>
            </div>
            <div className="font-semibold text-gray-600 dark:text-gray-200 text-xs pb-2 pt-1 md:text-base"> {item.title} </div>
          </div>
        ))}
      </div>
    </div>

  );
}