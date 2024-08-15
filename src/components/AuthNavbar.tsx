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
      <div className="flex items-center gap-3 mb-4">
        <div>
          <p className="text-lg font-bold capitalize">{user.name}</p>
        </div>
        <div className="flex items-center justify-center w-16 h-16 mr-4 text-3xl font-bold text-white rounded-full bg-brand">
          {user.name[0]}
        </div>
      </div>
    </div>
  );
}

export default AuthNavbar;
