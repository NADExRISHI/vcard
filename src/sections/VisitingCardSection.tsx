import { motion } from "framer-motion";
import VisitingCard from "@/components/VisitingCard";
import { Linkedin, Globe, MessageCircle } from "lucide-react";

const PROFILE = {
  name: "Rishikesh Patil",
  subtitle:
    "Engineering Student | Startup Enthusiast | Mobility Innovator",
  avatarUrl: "/profile.jpg",
  phone: "+91 8277747242",
  email: "rishikeshpatil82777@gmail.com",
  website: "https://rishikesh-patil-portfolio.vercel.app/",
  resumeUrl: "/Rishikesh_Patil_Resume.pdf",
  socials: [
    {
      icon: <Linkedin />,
      url: "https://www.linkedin.com/in/rishikesh-patil-486421389?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      label: "LinkedIn",
    },
    {
      icon: <Globe />,
      url: "https://rishikesh-patil-portfolio.vercel.app/",
      label: "Portfolio",
    },
    {
      icon: <MessageCircle />,
      url: "https://wa.me/918277747242",
      label: "WhatsApp",
    },
  ],
  vcfData: `BEGIN:VCARD
VERSION:3.0
FN:Rishikesh Patil
TEL;TYPE=CELL:+918277747242
EMAIL:rishikeshpatil82777@gmail.com
URL:https://rishikesh-patil-portfolio.vercel.app/
TITLE:Engineering Student | Startup Enthusiast
NOTE:Engineering Student at GIT, Belagavi
END:VCARD`,
};

export function VisitingCardSection() {
  return (
    <section
      id="vcard"
      className="relative w-full overflow-hidden px-4 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <VisitingCard
            name={PROFILE.name}
            subtitle={PROFILE.subtitle}
            avatarUrl={PROFILE.avatarUrl}
            phone={PROFILE.phone}
            email={PROFILE.email}
            website={PROFILE.website}
            resumeUrl={PROFILE.resumeUrl}
            socials={PROFILE.socials}
            vcfData={PROFILE.vcfData}
          />
        </motion.div>
      </div>
    </section>
  );
}
