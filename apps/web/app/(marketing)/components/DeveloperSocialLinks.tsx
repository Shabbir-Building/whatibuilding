import { cn } from "@whatibuilding/components";
import { Github, Linkedin, Twitter } from "lucide-react";

import Link from "next/link";
import React from "react";

const DeveloperSocialLinks = ({ className }: { className: string }) => {
  return (
    <div className={cn("mt-8 items-center gap-8", className)}>
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
  );
};

export default DeveloperSocialLinks;
