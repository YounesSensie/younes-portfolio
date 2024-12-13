import Image from "next/image";
import { GradualSpacing } from "./ui/GradualSpacing";
import { ShineBorder } from "./ui/ShineBorder";
import { aboutData } from "@/data";

function About() {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center w-full py-20 container">
        <GradualSpacing text="About Me" />
        <ShineBorder
          className="relative w-full flex-col overflow-hidden rounded-lg border !bg-[#020617] md:shadow-xl p-5 sm:p-10"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex gap-x-10 gap-y-5 flex-col items-center md:items-start text-center md:text-start md:flex-row w-full font-cairo">
            <div className="rounded-full overflow-hidden size-32 sm:!size-60">
            
              <Image
                src="/profile2.png"
                alt="Younes Sellimi"
                width={400}
                height={400}
                className="rounded-full w-full object-cover border-2 border-dashed border-orange-500"
                priority
              />
              
            </div>
            <div className="!leading-relaxed text-sm md:text-lg flex-1 text-start">
              <p>
              I’m Younes Sellimi, a passionate Full-Stack Developer with 2 years of experience crafting modern web applications and SaaS 
              solutions. I specialize in leveraging JavaScript, React, Next.js, and Python to build scalable, responsive, and high-performance 
              applications.With a growing interest in Machine Learning and AI, I aim to integrate intelligent solutions that enhance user 
              experience and  drive business innovation. My approach combines clean code, performance optimization, and user-centered design to 
              deliver secure, modern applications. I stay current with the latest technologies to ensure my work remains cutting-edge and helps 
              businesses achieve their digital goals
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-10 mt-5 w-full justify-between">
                {aboutData.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center flex-1 justify-start"
                  >
                    <span className="text-3xl font-bold text-black dark:text-white">
                      +{item.number}
                    </span>
                    <span className="text-sm md:text-md text-gray-600 dark:text-gray-400">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
}
export default About;
