import React from "react";
import { Users, Code, Trophy, CalendarDays, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function CommunityDashboard() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      value: "450+",
      label: "Active Members",
      color: "bg-blue-50 dark:bg-blue-900/30",
    },
    {
      icon: <Code className="w-6 h-6 text-green-500" />,
      value: "80+",
      label: "Projects Built",
      color: "bg-green-50 dark:bg-green-900/30",
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-yellow-500" />,
      value: "30+",
      label: "Workshops & Events",
      color: "bg-yellow-50 dark:bg-yellow-900/30",
    },
    {
      icon: <Trophy className="w-6 h-6 text-red-500" />,
      value: "10+",
      label: "Hackathons Won",
      color: "bg-red-50 dark:bg-red-900/30",
    },
    {
      icon: <Star className="w-6 h-6 text-purple-500" />,
      value: "100%",
      label: "Student Satisfaction",
      color: "bg-purple-50 dark:bg-purple-900/30",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#202124] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
        >
          GDSC GL Bajaj Community Dashboard
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Here’s a quick look at how our community is growing, learning, and
          innovating together. These numbers reflect our commitment to
          collaboration, technology, and impact.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-xl p-6 flex flex-col items-center justify-center ${stat.color} shadow-md hover:shadow-lg transition-all`}
            >
              <div className="mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* optional bottom tagline */}
      <div className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
        Building a community of learners, developers, and innovators 💡
      </div>
    </section>
  );
}
