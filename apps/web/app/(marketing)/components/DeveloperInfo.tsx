import { MapPin, Box, Users, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { devSkills } from "../constants";

export default function DeveloperInfo() {
  const profileImage = "/profile-image.png";

  return (
    <div className="py-16 w-full md:w-[33%] flex flex-col gap-10 min-h-screen md:h-screen md:overflow-y-auto">
      {/* Profile Section */}
      <div className="flex flex-col gap-6">
        <Image
          alt="profile-image"
          src={profileImage}
          width={180}
          height={180}
          className="rounded-full"
        />
        <div className="space-y-1">
          <h1 className="text-4xl font-semibold text-neutral-700">
            Amdad Shabbir
          </h1>
          <p className="text-xl text-neutral-700">
            Full Stack Software Engineer
          </p>

          <Link
            href="https://www.google.com/maps/place/Bangladesh/data=!4m2!3m1!1s0x30adaaed80e18ba7:0xf2d28e0c4e1fc6b?sa=X&ved=1t:242&ictx=111"
            className="w-fit flex items-center gap-1 text-sm mt-2 text-neutral-700 hover:text-blue-500 transition"
            target="_blank"
          >
            <MapPin size={12} />
            <span>Bangladesh</span>
          </Link>
        </div>
      </div>

      {/* Bio & Stats */}
      <div className="space-y-2">
        <p className="text-xl">I turns ideas into solutions.</p>

        <div className="flex items-center gap-6 text-lg">
          <div className="flex items-center gap-2">
            <Box size={20} />
            <span className="font-semibold text-xl text-neutral-700">
              2 Products
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={20} />
            <span className="font-semibold text-xl text-neutral-700">
              3k Active Users
            </span>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col gap-3">
        {devSkills.map((skill, index) => (
          <div key={index} className="space-y-1">
            <h3 className="font-semibold text-neutral-700">{skill.label}</h3>
            <p className="text-sm text-neutral-700">{skill.value}</p>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-8 flex items-center gap-8">
        <Link
          href="https://github.com/Shabbir-Building"
          className="hover:scale-120 transition"
          target="_blank"
        >
          <Github size={32} strokeWidth={1} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/amdadshabbir/"
          className="hover:scale-120 transition"
          target="_blank"
        >
          <Linkedin size={32} strokeWidth={1} />
        </Link>
        <Link
          href="https://x.com/AmdadulShabbir"
          className="hover:scale-120 transition"
          target="_blank"
        >
          <Twitter size={32} strokeWidth={1} />
        </Link>
      </div>
    </div>
  );
}
