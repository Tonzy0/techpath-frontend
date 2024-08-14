import { Link } from "react-router-dom";

const routes = [
  {
    name: "Home",
    link: "/dashboard",
  },
  {
    name: "Career Options",
    link: "/dashboard/career-options",
  },
  {
    name: "Career Assesments",
    link: "/dashboard/career-assessment",
  },
];

function SideBar() {
  return (
    <div className="flex flex-col gap-8 bg-white gap w-[300px] p-8 h-full">
      {routes.map((route) => (
        <Link to={route.link} className="font-bold text-brand">
          {route.name}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
