import React from "react";
import { Linkedin } from "lucide-react";

export default function TeamMemberCard({ member }) {
  return (
    <div className="bg-white dark:bg-gdsc-surface rounded-xl p-5 card-shadow text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <img
        src={member.image || "/images/team/default.jpg"}
        alt={member.name}
        className="h-24 w-24 mx-auto rounded-full object-cover mb-4 border-4 border-gray-100 dark:border-gray-700"
      />

      <div className="font-semibold text-gray-900 dark:text-white">{member.name}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">{member.role}</div>

      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#005582] text-white px-4 py-2 rounded-full text-sm transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
      )}
    </div>
  );
}
