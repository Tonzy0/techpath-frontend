import { useAuthStore } from "@/lib/store/auth";
import { Link } from "react-router-dom";

const routes = [
  {
    name: "Home",
    link: "/dashboard",
    isMentor: true,
  },
  {
    name: "Mentors",
    link: "/dashboard/mentors",
    isMentor: false,
  },
  {
    name: "Career Options",
    link: "/dashboard/career-options",
    isMentor: true,
  },
  {
    name: "Career Assessments",
    link: "/dashboard/career-assessment",
    isMentor: false,
  },
];

function SideBar() {
  const user = useAuthStore((store: any) => store.user);

  return (
    <div className="flex flex-col gap-8 bg-white w-[300px] p-8 h-full">
      {routes.map((route, index) => {
        if (!route.isMentor && user.role == "mentor") return;
        return (
          <Link
            key={index}
            to={route.link}
            className="font-bold text-brand hover:text-brand-dark"
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}

export default SideBar;
