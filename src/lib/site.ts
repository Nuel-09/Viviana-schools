export const siteConfig = {
  name: "Viviana Private Nursery, Primary and Secondary Schools",
  shortName: "Viviana Schools",
  description:
    "Viviana Private Nursery, Primary and Secondary Schools nurturing young minds with excellence from early years through secondary education. Enroll today.",
  tagline: "Nurturing Tomorrow's Leaders Today with Excellence",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vivianaschools.com",
  logo: {
    src: "/images/logo.jpg",
    alt: "Viviana Private Schools official crest — VPS, Moulding a Great Future",
    width: 174,
    height: 205,
  },
  contact: {
    phone: "+234 8069754378",
    email: "vivianaprivateschools@gmail.com",
    address: "Iyamu str, Iyana sashi, Lagos, Nigeria",
    hours: "Mon – Fri: 8:00 AM – 3:00 PM",
  },
  social: {
    facebook: "https://facebook.com/vivianaprivateschools",
    instagram: "https://instagram.com/vivianaprivateschools",
    twitter: "https://twitter.com/vivianaprivateschools",
  },
} as const;

export const portalLinks = [
  {
    label: "Admin Portal",
    description: "Staff & administrators",
    url:
      process.env.NEXT_PUBLIC_ADMIN_PORTAL_URL ??
      "https://www.eduffice.com/index.php/admin_login",
  },
  {
    label: "Student Portal",
    description: "Students & parents",
    url:
      process.env.NEXT_PUBLIC_STUDENT_PORTAL_URL ??
      "https://students.eduffice.com/index.php/login",
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#facilities", label: "Facilities" },
  { href: "#admissions", label: "Admissions" },
  { href: "#contact", label: "Contact" },
] as const;
