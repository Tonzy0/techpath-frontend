import { useAuthStore } from "@/lib/store/auth";
import { Link } from "react-router-dom";

function AuthNavbar() {
  const user = useAuthStore((store: any) => store.user);

  return (
    <div className="h-[100px] bg-white  px-10 py-6 flex justify-between">
      <div>
        <Link to="/dashboard" className="text-xl font-bold text-brand">
          TECHPATH
        </Link>
      </div>
      <div>
        <p className="text-lg font-bold capitalize">{user.name}</p>
      </div>
    </div>
  );
}

export default AuthNavbar;
