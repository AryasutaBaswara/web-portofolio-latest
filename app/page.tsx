import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import ElectricBorder from "./components/ElectricBorder/ElectricBorder";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import {
  DiPhp,
  DiHtml5,
  DiCss3,
  DiLaravel,
  DiMysql,
  DiJsBadge,
  DiReact,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import Particles from "./components/Particles/Particles";
import CardSwap, { Card } from "./components/CardSwap/CardSwap";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import TiltedCard from "./components/TiltedCard/TiltedCard";

// Alternative with image sources

const techLogos = [
  { node: <DiHtml5 />, title: "React", href: "https://react.dev" },
  { node: <DiCss3 />, title: "React", href: "https://react.dev" },
  { node: <DiLaravel />, title: "React", href: "https://react.dev" },
  { node: <DiPhp />, title: "React", href: "https://react.dev" },
  { node: <DiJsBadge />, title: "React", href: "https://react.dev" },
  { node: <DiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "React", href: "https://react.dev" },
  { node: <DiMysql />, title: "React", href: "https://react.dev" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <SplashCursor />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="rgba(255, 255, 255, 0.1)"
          hoverFillColor="#222"
        />
        <div className="absolute bottom-0 w-full h-80 bg-gradient-to-b from-transparent to-black"></div>
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
                      staggerDuration={0.05}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={3000}
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
                    textAlign="start"
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
                    textAlign="start"
                  />
                </div>
                <BlurText
                  text="A 5th-semester Computer Science student and aspiring Fullstack Developer, currently working part-time as a Teaching Assistant. Familiar with building web using Golang, PHP, Laravel, and MySQL. Demonstrates adaptability, problem-solving, and teamwork through academic projects and volunteer activities, with strong interest in growing technical and professional skills."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8"
                />
                <div className="flex gap-6">
                  <div className="w-fit group transition-transform duration-500 hover:scale-110">
                    <ElectricBorder
                      color="#ff8000"
                      speed={1}
                      chaos={0.5}
                      thickness={2}
                      style={{ borderRadius: 16 }}
                    >
                      <div
                        className="px-6 py-3 rounded-[16px] transition-colors duration-300
                 group-hover:bg-orange-500/20 group-hover:cursor-pointer"
                      >
                        <p className="transition-colors duration-300 group-hover:text-white">
                          Download CV
                        </p>
                      </div>
                    </ElectricBorder>
                  </div>
                  <div className="w-fit group transition-transform duration-500 hover:scale-115">
                    <ElectricBorder
                      color="#008080"
                      speed={1}
                      chaos={0.5}
                      thickness={2}
                      style={{ borderRadius: 16 }}
                    >
                      <div
                        className="px-6 py-3 rounded-[16px] transition-colors duration-300
                 group-hover:bg-cyan-500/20 group-hover:cursor-pointer"
                      >
                        <p className="transition-colors duration-300 group-hover:text-white">
                          Visit LinkedIn
                        </p>
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
      <div className="absolute w-full h-full mt-6 ">
        <Particles
          particleColors={["#9E9E9E", "#9E9E9E"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="absolute bottom-0 w-full h-60 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="container mx-auto py-60 mb-6">
        <div className="flex flex-col mt-6 ">
          <h1 className="text-6xl text-white font-bold text-center z-50">
            <span className="text-orange-400">Tech</span> Stack
          </h1>
          <div
            style={{
              height: "200px",
              position: "relative",
              overflow: "hidden",
              marginTop: "60px",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={150}
              direction="left"
              logoHeight={100}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000"
              ariaLabel="Technology partners"
            />
          </div>
          <p className="text-xl text-center text-gray-500">
            Tools & technologies that i'm still learning and mastery to build
            future projects
          </p>
        </div>
      </div>
      <div className="absolute w-full h-full mt-6">
        <div className="absolute w-full h-60 bg-gradient-to-t from-transparent to-black"></div>
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="rgba(255, 255, 255, 0.1)"
          hoverFillColor="#222"
        />
        <div className="absolute bottom-0 w-full h-80 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6 items-start">
                <SplitText
                  text="Some of my projects that i have done"
                  className="text-6xl font-bold text-start"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="start"
                />
                <SplitText
                  text="check out the repo!"
                  className="text-3xl text-start text-gray-500"
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
            </div>
          </div>
          <div className="col-span-6">
            <div style={{ height: "600px", position: "relative" }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={80}
                delay={3000}
                pauseOnHover={false}
              >
                <Card className="flex flex-col items-start gap-4 border-4 bg-black">
                  <div className="flex items-center justify-between w-full px-4 ">
                    <h3 className="text-xl text-white font-bold ms-4 mt-4">
                      Apple Website
                    </h3>
                    <FaGithub className="h-8 w-8 mt-4 me-4 hover:scale-110 hover:cursor-pointer" />
                  </div>
                  <img
                    src="/apple.jpg"
                    alt="Apple Website"
                    className="w-full h-full object-cover"
                  />
                </Card>
                <Card className="flex flex-col items-start gap-4 border-4 bg-black">
                  <div className="flex items-center justify-between w-full px-4 ">
                    <h3 className="text-xl text-white font-bold ms-4 mt-4">
                      Nvidia Website
                    </h3>
                    <FaGithub className="h-8 w-8 mt-4 me-4 hover:scale-110 hover:cursor-pointer" />
                  </div>
                  <img
                    src="/nvidia.jpg"
                    alt="Apple Website"
                    className="w-full h-full object-cover"
                  />
                </Card>
                <Card className="flex flex-col items-start gap-4 border-4 bg-black">
                  <div className="flex items-center justify-between w-full px-4 ">
                    <h3 className="text-xl text-white font-bold ms-4 mt-4">
                      Intel Website
                    </h3>
                    <FaGithub className="h-8 w-8 mt-4 me-4 hover:scale-110 hover:cursor-pointer" />
                  </div>
                  <img
                    src="/intel.jpg"
                    alt="Apple Website"
                    className="w-full h-full object-cover"
                  />
                </Card>
                <Card className="flex flex-col items-start gap-4 border-4 bg-black">
                  <div className="flex items-center justify-between w-full px-4 ">
                    <h3 className="text-xl text-white font-bold ms-4 mt-4">
                      Amazon Website
                    </h3>
                    <FaGithub className="h-8 w-8 mt-4 me-4 hover:scale-110 hover:cursor-pointer" />
                  </div>
                  <img
                    src="/amazon.jpg"
                    alt="Apple Website"
                    className="w-full h-full object-cover"
                  />
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full mt-6 ">
        <Particles
          particleColors={["#9E9E9E", "#9E9E9E"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="absolute bottom-0 w-full h-60 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 items-center mt-6">
          <h1 className="text-6xl text-white font-bold text-center z-50">
            My <span className="text-orange-400">Certificates</span>
          </h1>
          <div className="flex mt-[60px] gap-[60px] relative">
            <TiltedCard
              imageSrc="/freeCodeCamp-RWD.jpg"
              altText="Kendrick Lamar - GNX Album Cover"
              containerHeight="300px"
              containerWidth="400px"
              imageHeight="300px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
            />
            <TiltedCard
              imageSrc="/Udemy-js.jpg"
              altText="Kendrick Lamar - GNX Album Cover"
              containerHeight="300px"
              containerWidth="400px"
              imageHeight="300px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
            />
            <TiltedCard
              imageSrc="/BWA-mern.jpg"
              altText="Kendrick Lamar - GNX Album Cover"
              containerHeight="300px"
              containerWidth="400px"
              imageHeight="300px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
            />
          </div>

          <BlurText
            text="Just a few certificates I’ve collected while learning and exploring. Nothing too fancy, but they show the areas I’ve been focusing on recently."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl mt-8 text-gray-500"
          />
        </div>
      </div>
      <div className="absolute w-full mt-4"></div>
      <div className="container mx-auto py-25 bg-transparent relative z-20">
        <div className="flex flex-col mt-6 gap-6 items-center justify-center ">
          <h1 className="text-6xl text-white font-bold text-center z-50">
            <span className="text-orange-400">Contact</span> Me
          </h1>
          <div className="flex gap-[60px] items-center mt-6">
            <FaInstagram className="h-15 w-15 cursor-pointer transition-transform duration-300 hover:scale-120 drop-shadow-[0_0_10px_#ffffff]" />
            <FaWhatsapp className="h-15 w-15 cursor-pointer transition-transform duration-300 hover:scale-120 drop-shadow-[0_0_10px_#ffffff]" />
            <BiLogoGmail className="h-15 w-15 cursor-pointer transition-transform duration-300 hover:scale-120 drop-shadow-[0_0_10px_#ffffff]" />
            <FaLinkedin className="h-15 w-15 cursor-pointer transition-transform duration-300 hover:scale-120 drop-shadow-[0_0_10px_#ffffff]" />
          </div>
        </div>
      </div>
    </div>
  );
}
