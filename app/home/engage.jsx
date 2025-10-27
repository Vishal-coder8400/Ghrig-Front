import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";

const roles = [
  {
    title: "Trainer",
    description: "Upskill professionals with expert-led programs",
    image: "/assets/images/trainer.png",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "https://job-portal-frontend-ghrig-d1pi.vercel.app/trainer/log-in",
  },
  {
    title: "Job Seeker",
    description: "Discover opportunities that match your skills",
    image: "/assets/images/jobSeeker.png",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "https://job-portal-frontend-ghrig-d1pi.vercel.app/job-seeker/log-in",
  },
  {
    title: "HR Recruiter",
    description: "Find top talent for your organization",
    image: "/assets/images/jobRecruiter.png",
    color: "bg-green-50",
    iconColor: "text-green-600",
    href: "https://job-portal-frontend-ghrig-d1pi.vercel.app/recruiter/log-in",
  },
  {
    title: "Job Referrers",
    description: "Earn rewards by connecting great people",
    image: "/assets/images/jobReferrers.png",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    href: "https://job-portal-frontend-ghrig-d1pi.vercel.app/super-admin/log-in",
  },
  {
    title: "Client/Corporate",
    description: "Access premium recruitment services",
    image: "/assets/images/client.png",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    href: "https://job-portal-frontend-ghrig-d1pi.vercel.app/corporate/log-in",
  },
];

export const Engage = () => {
  return (
    <section className="flex flex-col items-center gap-16 px-4 py-20 w-full bg-gradient-to-br from-gray-50 to-white">
      <header className="flex flex-col items-center gap-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
           Choose How You Engage  with GHRig <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
           
          </span>
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
          Click on your role below to proceed to the respective login page and start your journey with GHRig.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl cursor-pointer">
        {roles.map((role, index) => (
          <Card
            key={index}
            className="group flex flex-col items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <div className="w-30 h-23 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover"
                alt={role.title}
                src={role.image}
              />
            </div>

            <CardContent className="flex flex-col items-left gap-4 p-0 text-center">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                {role.title}
              </h3>

              <a
                href={role.href}
                className="flex items-center justify-center gap-2.5 w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2.5 transition-all duration-300 group-hover:shadow-lg"
                target="_blank"
              >
                <span className="font-medium">Proceed</span>
                <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};