import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { AnimatedGridPattern } from "./ui/AnimatedBgHero";
import { cn } from "@/lib/utils";
import { FadeText } from "./ui/FadeText";
import { DownloadCloud } from "lucide-react";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-[1200px] left-0 md:left-[16%] md:-top-[15%]"
          fill="white"
        />
      </div>
      <AnimatedGridPattern
        numSquares={10}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(circle_at_center,white,transparent)]",
          "w-[80%] h-[90vh] absolute top-0 left-1/2 transform -translate-x-1/2"
        )}
      />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <FadeText
            className="uppercase tracking-[2px] text-xs !text-center text-blue-100"
            direction="down"
            text="Transforming Business Challenges into Digital Success with Full-Stack Expertise"
          />
          <TextGenerateEffect
            words="First impressions last so make it count"
            className="text-center text-[40px] md:text-5xl lg:text-7xl max-w-[800px] font-extrabold"
          />
          <FadeText
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
            text="Hi! I'm Younes Sellimi, a Full-Stack Developer with React , Next.js and Python."
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.3 } },
            }}
          />
          <FadeText
            text=""
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.5 } },
            }}
          >
            <div className="flex gap-5 mt-5 md:mt-0">
              <Link href={"/MyResume.pdf"} download={"/MyResume.pdf"} target={"_blank"}>
                <MagicButton
                  title="Download CV"
                  icon={<DownloadCloud />}
                  position="right"
                />
              </Link>
              <Link href="#projects">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
            </div>
          </FadeText>
        </div>
      </div>
    </div>
  );
};

export default Hero;
