import { FaTooth, FaDumbbell } from "react-icons/fa";
import { IoEar } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { LuGlasses } from "react-icons/lu";
import { PiBedBold } from "react-icons/pi";

export const navLinks = [
  {
    label: "About",
    route: "/about-us",
  },
  {
    label: "Search Providers",
    route: "/search-providers",
  },
  {
    label: "Contact Us",
    route: "/contact-us",
  },
];

export const faqDetails = [
  {
    question: "What is Carefinder?",
    answer:
      "Carefinder is a tool designed to help users find, export, and share information about hospitals within their region. It provides a simple way to locate hospitals and access their contact details.",
  },
  {
    question: "How do I search for hospitals in my area?",
    answer:
      "You can search for hospitals by entering your location or selecting from a list of nearby cities. Carefinder will display a list of hospitals with their contact details, including address, phone number, and email.",
  },
  {
    question: "Can I export the list of hospitals?",
    answer:
      "Yes, Carefinder allows you to export the list of hospitals to a CSV file. This feature makes it easy to save and share the information with others.",
  },
  {
    question: "Is it necessary to create an account to use Carefinder?",
    answer:
      "You don’t need an account to search for hospitals. However, admin users must create an account to access the platform’s admin features, such as managing hospitals and exporting data.",
  },
  {
    question: "How do I share the hospital information with others?",
    answer:
      "You can share the list of hospitals via email or by generating a shareable link. Carefinder provides easy options to send the information directly to others.",
  },
];

export const testimonialInfo = [
  {
    text: "Carefinder has made it incredibly easy for me to find reliable hospitals in my area. The ability to export the information and share it with my family has been a game-changer.",
    user: "John Doe",
    initials: "JD",
  },
  {
    text: "I love how simple and user-friendly Carefinder is. The hospital search feature is quick and accurate, and I can easily access all the contact details I need.",
    user: "Amaka Johnson",
    initials: "AJ",
  },
  {
    text: "As someone who often travels for work, Carefinder helps me locate hospitals in new cities without any hassle. The export to CSV feature is especially useful for keeping records.",
    user: "Dan Okafor",
    initials: "DO",
  },
  {
    text: "Carefinder has been a lifesaver! I found a hospital nearby in an emergency situation, and the contact information provided was accurate and up-to-date.",
    user: "Aisha Bello",
    initials: "AB",
  },
  {
    text: "The platform's simplicity and efficiency are commendable. I appreciate the ability to share hospital details with my friends and family easily.",
    user: "Tunde Adeola",
    initials: "TA",
  },
];

export const teamData = [
  {
    name: "Dr. Grace Olanrewaju",
    position: "Founder & CEO",
    imageURL: "/assets/grace.avif",
    imageWidth: 1639,
    imageHeight: 1288,
    bio: "Dr. Grace Olanrewaju has over 20 years of experience in public health. She founded Carefinder to make healthcare more accessible in Nigeria.",
  },
  {
    name: "Chidi Nwosu",
    position: "Chief Technology Officer (CTO)",
    imageURL: "/assets/chidi.avif",
    imageWidth: 1999,
    imageHeight: 1452,
    bio: "Chidi Nwosu is a software development expert with 10 years of experience. He ensures Carefinder’s platform is secure and user-friendly.",
  },
  {
    name: "Ngozi Okeke",
    position: "Head of Operations",
    imageURL: "/assets/ngozi.avif",
    imageWidth: 989,
    imageHeight: 1477,
    bio: "Ngozi Okeke manages daily operations at Carefinder, optimizing processes to enhance user satisfaction.",
  },
  {
    name: "Michael Adeyemi",
    position: "Marketing Director",
    imageURL: "/assets/michael.avif",
    imageWidth: 2070,
    imageHeight: 1380,
    bio: "Michael Adeyemi, with 8 years in healthcare marketing, leads strategies to grow Carefinder’s user base and reach.",
  },
];

export const providerIcons: Record<string, IconType> = {
  "Optical Center": LuGlasses,
  Hospital: PiBedBold,
  "Dermatological Center": PiBedBold,
  "Dental Clinic": FaTooth,
  "Physiotherapy Clinic": PiBedBold,
  Gym: FaDumbbell,
  Spa: FaDumbbell,
  Clinic: PiBedBold,
  "Orthopedic Center": PiBedBold,
  "Psychotherapy Center": PiBedBold,
  "Tertiary Care Center": PiBedBold,
  ENT: IoEar,
  "Psychiatry Center": PiBedBold,
};
