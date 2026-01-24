import { MapPin, Box, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { devSkills } from "../constants";
import DeveloperSocialLinks from "./DeveloperSocialLinks";

export default function DeveloperInfo() {
  const profileImage = "/profile-image.png";

  return (
    <div className="pt-10 md:py-16 w-full md:w-[33%] flex flex-col gap-8 md:gap-10">
      {/* Profile Section */}
      <div className="flex flex-row gap-6 md:flex-col items-center md:items-start">
        <Image
          alt="profile-image"
          src={profileImage}
          width={180}
          height={180}
          className="rounded-full size-22 md:size-45"
        />
        <div className="md:space-y-1 flex flex-col">
          <h1 className="text-2xl md:text-4xl font-semibold text-neutral-700">
            Amdad Shabbir
          </h1>
          <p className="text-sm md:text-xl text-neutral-700">
            Full Stack Software Engineer
          </p>

          <Link
            href="https://www.google.com/maps/place/Bangladesh/data=!4m2!3m1!1s0x30adaaed80e18ba7:0xf2d28e0c4e1fc6b?sa=X&ved=1t:242&ictx=111"
            className="w-fit flex items-center gap-1 text-xs md:text-sm mt-1 md:mt-2 text-neutral-700 hover:text-blue-500 transition"
            target="_blank"
          >
            <MapPin size={12} />
            <span>Bangladesh</span>
          </Link>
        </div>
      </div>

      {/* Bio & Stats */}
      <div className="space-y-2 flex flex-col items-center md:items-start">
        <p className="text-lg md:text-xl">I turns ideas into solutions.</p>

        <div className="flex items-center gap-6 text-lg">
          <div className="flex items-center gap-2">
            <Box size={20} />
            <span className="font-semibold text-md md:text-xl text-neutral-700">
              3 Products
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={20} />
            <span className="font-semibold text-md md:text-xl text-neutral-700">
              150 Active Users
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
      <DeveloperSocialLinks className="hidden md:flex" />
    </div>
  );
}
