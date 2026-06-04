import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Python } from "@/components/ui/svgs/python";
import { Csharp } from "@/components/ui/svgs/csharp";

type HackathonLink = {
  title: string;
  href: string;
  icon: ReactNode;
};

export const DATA = {
  name: "Sovit Patel",
  initials: "SP",
  url: "https://github.com/sovit1",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description: "Embedded Engineer | Low-Level Programming",
  summary:
    "I am an embedded systems engineer focused on firmware, hardware-software integration, and low-level device programming. My experience spans bare-metal drivers, Linux userspace applications, battery management systems, sensor interfacing, and PCB design for embedded products.",
  avatarUrl: "\DSC_0517.png",
  skills: [
    { name: "C", icon: Csharp },
    { name: "C++", icon: Csharp },
    { name: "Python", icon: Python },
    { name: "Embedded Linux", icon: Icons.github },
    { name: "Bare-metal", icon: Csharp },
    { name: "KiCad", icon: Csharp },
    { name: "STM32", icon: Csharp },
    { name: "ESP32", icon: Csharp },
    { name: "TI C2000", icon: Csharp },
    { name: "Git", icon: Icons.github },
    { name: "Make / Buildroot", icon: Icons.github },
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
      email: {
        name: "Gmail",
        url: "mailto:sovitpatel80@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "WCB Robotics",
      href: "https://www.linkedin.com/company/wcb-robotics/",
      badges: [],
      location: "Hyderabad, India",
      title: "Embedded Engineer",
      logoUrl: "/me.png",
      start: "Jan 2025",
      end: "Dec 2025",
      description:
        "• Developed firmware and hardware support for battery management workflows.\n• Worked on embedded control logic, sensor integration, and system debugging.\n• Contributed to PCB-related design validation and testing for prototype hardware.\n• Collaborated on improving charging, balancing, and monitoring functionality for embedded systems.",
    },
  ],
  education: [
    {
      school: "National Institute of Technology, Rourkela",
      href: "https://nitrkl.ac.in/",
      degree: "B.Tech in Electronics & Instrumentation Engineering",
      logoUrl: "/me.png",
      start: "Dec 2021",
      end: "May 2025",
    },
  ],
  projects: [
    {
      title: "Character device driver",
      href: "https://github.com/sovit1",
      dates: "Kernel / Linux Embedded",
      active: true,
      description:
        "Developed a Linux character device driver as a loadable kernel module handling open, read, write, and release operations for kernel-user space interaction, along with a test user-space application.",
      technologies: ["C", "Make", "GCC", "Buildroot", "BusyBox", "U-Boot", "BeagleBone Black"],
      links: [{ type: "GitHub", href: "https://github.com/sovit1", icon: <Icons.github className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "MPU6050 I²C Driver Application",
      href: "https://github.com/sovit1",
      dates: "Embedded Linux / Sensor Interfaces",
      active: true,
      description:
        "Built a Linux userspace C application to acquire raw accelerometer data from an MPU6050 over I²C, using ioctl() for communication and GCC Linaro for cross-compilation on BeagleBone Black.",
      technologies: ["C", "GCC Linaro", "I²C", "BeagleBone Black", "SSH"],
      links: [{ type: "GitHub", href: "https://github.com/sovit1", icon: <Icons.github className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "Bare-Metal GPIO Driver",
      href: "https://github.com/sovit1",
      dates: "STM32 / Bare-metal",
      active: true,
      description:
        "Programmed a bare-metal GPIO driver for a 4x4 matrix keypad on STM32F407 to detect key-press status and support embedded input handling.",
      technologies: ["C", "STM32F407", "Bare-metal", "GPIO"],
      links: [{ type: "GitHub", href: "https://github.com/sovit1", icon: <Icons.github className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "Titan Future Wear Hackathon",
      href: "https://github.com/sovit1",
      dates: "IoT / Wearables",
      active: true,
      description:
        "Built a low-cost smartwatch prototype using ESP32 with SpO2, heart-rate, and accelerometer sensors for step counting and Firebase-based real-time data transmission.",
      technologies: ["IoT", "ESP32", "Firebase", "C", "Eagle"],
      links: [{ type: "GitHub", href: "https://github.com/sovit1", icon: <Icons.github className="size-3" /> }],
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
      image: "",
      links: [] as HackathonLink[],
    },
    {
      title: "TIH-IoT Ideate'22",
      dates: "Dec 2022",
      location: "IIT Bombay",
      description:
        "Worked on a stress-sensor ideation project and secured runners-up position in the competition.",
      image: "",
      links: [] as HackathonLink[],
    },
    {
      title: "Devbhoomi Cyber Hackathon'22",
      dates: "Aug 2022",
      location: "IIT Roorkee",
      description:
        "Participated in the road-safety and management challenge and achieved runners-up position.",
      image: "",
      links: [] as HackathonLink[],
    },
  ],
} as const;