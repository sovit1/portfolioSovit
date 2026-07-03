import { Icons } from "@/components/icons";
import { C } from "@/components/ui/svgs/c";
import { Python } from "@/components/ui/svgs/python";
import {
  Boxes,
  Braces,
  Bug,
  CircuitBoard,
  Code2,
  Cpu,
  GitBranch,
  GitFork,
  HomeIcon,
  Keyboard,
  MonitorCog,
  Rocket,
  Terminal,
  Wifi,
  Workflow,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";

type HackathonLink = {
  title: string;
  href: string;
  icon: ReactNode;
};

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  links: HackathonLink[];
  rank?: string;
};

/*TODO: Add images/videos to github projects




fix the broken mail link


*/



const iconClassName = "size-4 shrink-0";
const skill = (name: string, icon: ReactNode) => ({ name, icon });

export const DATA = {
  name: "Sovit Patel",
  initials: "SP",
  url: "https://github.com/sovit1",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description: "System Software Engineer",
  summary:
    "I am a System/Embedded software engineer focused on firmware, hardware-software integration, and low-level device programming. My experience spans bare-metal drivers, Linux device drivers, battery management systems, sensor interfacing, and PCB design for embedded products.",
  avatarUrl: "/DSC_0517.png",
  skillGroups: [
    {
      title: "Languages",
      items: [
        skill("C", <C className={iconClassName} />),
        skill("C++", <Code2 className={iconClassName} />),
        skill("Python", <Python className={iconClassName} />),
      ],
    },
    {
      title: "Tools",
      items: [
        skill("Make", <Terminal className={iconClassName} />),
        skill("Buildroot", <Boxes className={iconClassName} />),
        skill("GCC", <Wrench className={iconClassName} />),
        skill("GCC Linaro", <Wrench className={iconClassName} />),
      ],
    },
    {
      title: "Bootloader",
      items: [skill("U-Boot", <Rocket className={iconClassName} />)],
    },
    {
      title: "Collaboration",
      items: [
        skill("Git", <GitBranch className={iconClassName} />),
        skill("GitHub", <Icons.github className={iconClassName} />),
        skill("GitLab", <GitFork className={iconClassName} />),
      ],
    },
    {
      title: "IDE / Text Editors",
      items: [
        skill("VS Code", <Braces className={iconClassName} />),
        skill("Eclipse-based IDEs", <MonitorCog className={iconClassName} />),
        skill("Vim", <Keyboard className={iconClassName} />),
      ],
    },
    {
      title: "PCB Design",
      items: [
        skill("KiCad", <CircuitBoard className={iconClassName} />),
        skill("Eagle", <CircuitBoard className={iconClassName} />),
      ],
    },
    {
      title: "Embedded Devices / MCUs",
      items: [
        skill("BeagleBone Black", <Cpu className={iconClassName} />),
        skill("STM32F407", <Cpu className={iconClassName} />),
        skill("TI C2000", <Cpu className={iconClassName} />),
        skill("Arduino", <Cpu className={iconClassName} />),
        skill("ESP32", <Wifi className={iconClassName} />),
      ],
    },
    {
      title: "Experience with",
      items: [
        skill("Bare-metal Programming", <Cpu className={iconClassName} />),
        skill("Linux", <Terminal className={iconClassName} />),
        skill("PCB Designing", <CircuitBoard className={iconClassName} />),
        skill("Algorithm Design", <Workflow className={iconClassName} />),
        skill("Debugging", <Bug className={iconClassName} />),
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "sovitpatel80@gmail.com",
    tel: "+91 7847021962",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sovit1",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sovit-patel-",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Gmail",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=sovitpatel80@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "WCB Robotics",
      href: "https://www.linkedin.com/company/wcb-robotics-inc/",
      badges: [" 6M + Full time"],
      location: "Hyderabad, India",
      title: "Embedded Engineer",
      logoUrl: "/wcbVS.png",
      start: "Jan 2025",
      end: "Dec 2025",
      description:
        "- Developed firmware and hardware support for battery management workflows.\n- Worked on embedded control logic, sensor integration, and system debugging.\n- Contributed to PCB-related design validation and testing for prototype hardware.\n- Collaborated on improving charging, balancing, and monitoring functionality for embedded systems.",
    },
    {
      company: "UG Fellow at IIT Roorkee",
      href: "https://www.linkedin.com/company/divyasampark-ihub-roorkee-for-devices-materials-and-technology-foundation/posts/?feedView=all",
      badges: ["Internship"],
      location: "Remote",
      title: "Embedded Engineer",
      logoUrl: "/ugFellow.jpg",
      start: "Jan 2025",
      end: "Dec 2025",
      description:
        "- Carried out research work in the scheme entitled ”Smart Pillars” by iHUB DivyaSampark setup under NM‐ICPS at IIT Roorkee.\n- Developed a prototype to detect the speed and number plate of a moving vehicle, sent data to a centralised database and issued ticket to the overspeeding vehicles.",
    },
    
  ],
  education: [
    {
      school: "National Institute of Technology, Rourkela",
      href: "https://nitrkl.ac.in/",
      degree: "B.Tech in Electronics & Instrumentation Engineering",
      logoUrl: "/nitrklLOGO.png",
      start: "Dec 2021",
      end: "May 2025",
    },
  ],
  projects: [
    {
      title: "Character device driver",
      href: "https://github.com/sovit1/CharacterDeviceDriver",
      dates: "Kernel / Linux Embedded",
      active: true,
      description:
        "Developed a Linux character device driver as a loadable kernel module handling open, read, write, and release operations for kernel-user space interaction, along with a test user-space application.",
      technologies: ["C", "Make", "GCC", "Buildroot", "BusyBox", "U-Boot", "BeagleBone Black"],
      links: [{ type: "GitHub", href: "https://github.com/sovit1/CharacterDeviceDriver", icon: <Icons.github className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "MPU6050 I2C Driver Application",
      href: "https://github.com/sovit1/MPU6050_BeagleBone_Interface",
      dates: "Embedded Linux / Sensor Interfaces",
      active: true,
      description:
        "Built a Linux userspace C application to acquire raw accelerometer data from an MPU6050 over I2C, using ioctl() for communication and GCC Linaro for cross-compilation on BeagleBone Black.",
      technologies: ["C", "GCC Linaro", "I2C", "BeagleBone Black", "SSH"],
      links: [{ type: "GitHub", href: "https://github.com/sovit1/MPU6050_BeagleBone_Interface", icon: <Icons.github className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "Bare-Metal GPIO Driver",
      href: "https://github.com/sovit1/BareMetalKeypad",
      dates: "STM32 / Bare-metal",
      active: true,
      description:
        "Programmed a bare-metal GPIO driver for a 4x4 matrix keypad on STM32F407 to detect key-press status and support embedded input handling.",
      technologies: ["C", "STM32F407", "Bare-metal", "GPIO"],
      links: [{ type: "GitHub", href: "https://github.com/sovit1/BareMetalKeypad", icon: <Icons.github className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "Titan Future Wear Hackathon",
      href: "https://github.com/sovit1/Smartwatch",
      dates: "IoT / Wearables",
      active: true,
      description:
        "Built a low-cost smartwatch prototype using ESP32 with SpO2, heart-rate, and accelerometer sensors for step counting and Firebase-based real-time data transmission.",
      technologies: ["IoT", "ESP32", "Firebase", "C", "Eagle"],
      links: [{ type: "GitHub", href: "https://github.com/sovit1/Smartwatch", icon: <Icons.github className="size-3" /> }],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Eyantra Robotics Competition",
      dates: "Mar 2023",
      location: "NIT Rourkela",
      description:
        "Built a 3-wheeled holonomic drive robot controlled via ROS and ESP32 over UDP for smooth omnidirectional motion and low-latency wireless control.",
      image: "/eyantra.svg",
      links: [] as HackathonLink[],
      rank: "Semi Finalist",
    },
    {
      title: "TIH-IoT Ideate'22",
      dates: "Dec 2022",
      location: "IIT Bombay",
      description:
        "Worked on a stress-sensor ideation project and secured runners-up position in the competition.",
      image: "/TIH-logo-scaled.webp",
      links: [] as HackathonLink[],
      rank: "Runners-up",
    },
    {
      title: "Chanakya Fellowship Award by IIT Roorkee",
      dates: "Aug 2022",
      location: "IIT Roorkee",
      description:
        "Worked on ANPR, speed detection systems and generating e-challan for over-speeding vehicles",
      image: "/ugFellow.jpg",
      links: [] as HackathonLink[],
      rank: "Fellowship Award",
    },
    {
      title: "Devbhoomi Cyber Hackathon'22",
      dates: "Aug 2022",
      location: "IIT Roorkee",
      description:
        "Participated in the road-safety and management challenge and achieved runners-up position.",
      image: "/devbhoomi.jpeg",
      links: [] as HackathonLink[],
      rank: "Runners-up",
    },
    {
      title: "Odisha JEE Rank 1",
      dates: "Nov 2020",
      location: "Govt. of Odisha",
      description:
        "Achieved Rank 1 among 40K students in the entrance exam for state government colleges of Odisha in the subjects of Mathematics, Physics and Chemistry.",
      image: "/odishaGOV.png",
      links: [
        {
          title: "Times of India",
          href: "https://timesofindia.indiatimes.com/education/news/ojee-2020-results-announced-sovit-patel-btech-topper/articleshow/79082971.cms",
          icon: (
            <img
              src="/toi.png"
              alt="Times of India"
              className="h-3.5 w-3.5 object-contain"
            />
          ),
        },
        {
          title: "The Indian Express",
          href: "https://indianexpress.com/article/education/odisha-ojee-result-2020-released-ojee-nic-in-6980864/",
          icon: (
            <img
              src="/express.png"
              alt="Indian Express"
              className="h-3.5 w-3.5 object-contain"
            />
          ),
        },
      ],
      rank: "Rank 1",
    },
  ],
} as const;
