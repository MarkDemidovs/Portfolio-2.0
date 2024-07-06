import Link from "next/link";
import { title } from "process";

const Links = [
  {
    link: "/augh",
    title: "About",
  },
  {
    link: "/augh",
    title: "Skills",
  },{
    link: "/augh",
    title: "Projects"
  },
  {
    link: "/auibh",
    title: "Contact"
  }
];

export default function NavBar() {
  return (
    <nav className="w-full h-16 bg-background1 text-offwhite flex items-center px-6 justify-between">
      <span className="text-2xl font-bold">MARK DEMIDOVS</span>
      <div className="flex gap-8">
        {Links.map((a, i) => (
          <Link href={a.link} key={i}>
            {a.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
