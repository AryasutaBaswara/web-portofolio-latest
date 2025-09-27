import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import ElectricBorder from "./components/ElectricBorder/ElectricBorder";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SplashCursor />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#944A00"
          hoverFillColor="#222"
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  duration={1.2}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.3}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">Look For Intern</h1>
                    <RotatingText
                      texts={[
                        "Backend Developer",
                        "Frontend Developer",
                        "Fullstack Developer",
                      ]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-orange-400 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl font-extrabold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <SplitText
                    text="I'm Aryasuta Baswara"
                    className="text-6xl font-semibold text-start"
                    delay={50}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
                  <SplitText
                    text="Student and Developer"
                    className="text-6xl font-semibold text-start text-orange-400"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
                </div>
                <BlurText
                  text="A 5th-semester Computer Science student and aspiring Fullstack Developer, currently working part-time as a Teaching Assistant. Familiar with building web using Golang, PHP, Laravel, and MySQL. Demonstrates adaptability, problem-solving, and teamwork through academic projects and volunteer activities, with strong interest in growing technical and professional skills."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8"
                />
                <div className="flex gap-4">
                  <div className="w-fit">
                    <ElectricBorder
                      color="#ff8000"
                      speed={1}
                      chaos={0.5}
                      thickness={2}
                      style={{ borderRadius: 16 }}
                    >
                      <div className="px-6 py-3">
                        <p>Download CV</p>
                      </div>
                    </ElectricBorder>
                  </div>
                  <div className="w-fit">
                    <ElectricBorder
                      color="#008080"
                      speed={1}
                      chaos={0.5}
                      thickness={2}
                      style={{ borderRadius: 16 }}
                    >
                      <div className="px-6 py-3">
                        <p>Visit LinkedIn</p>
                      </div>
                    </ElectricBorder>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
