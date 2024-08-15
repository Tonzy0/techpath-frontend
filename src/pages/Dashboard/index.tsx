import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <AuthLayout>
      <DashboardLayout>
        <div className="max-w-4xl px-4 py-8 mx-auto">
          <h1 className="mb-6 text-3xl font-bold text-gray-800">Dashboard</h1>

          <h2 className="mb-4 text-xl text-gray-600">
            What would you like to do?
          </h2>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              EXPLORE CAREER OPTIONS
            </h3>
            <p className="mb-4 text-gray-600">
              Browse list of career paths and start planning your future today!
            </p>
            <Link
              to="/dashboard/career-options"
              className="inline-block px-4 py-2 font-semibold text-white transition-colors bg-indigo-900 rounded hover:bg-indigo-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      </DashboardLayout>
    </AuthLayout>
  );
}

export default Dashboard;
