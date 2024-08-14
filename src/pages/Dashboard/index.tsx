import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import { useAuthStore } from "@/lib/store/auth";

function Dashboard() {
  const user = useAuthStore((store: any) => store.user);
  return (
    <AuthLayout>
      <DashboardLayout>hello {user.name}</DashboardLayout>
    </AuthLayout>
  );
}

export default Dashboard;
