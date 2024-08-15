import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import techcareers from "@/data/techcareers.json";

function CareerOptions() {
  return (
    <AuthLayout>
      <DashboardLayout>
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <h1 className="mb-6 text-3xl font-bold text-gray-800">
            Tech Career Options
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techcareers.map((career, index) => (
              <div
                key={index}
                className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <h2 className="mb-2 text-xl font-semibold text-gray-900">
                  {career.title}
                </h2>
                <p className="h-20 mb-4 overflow-hidden text-sm text-gray-600">
                  {career.description}
                </p>
                <p className="mb-3 font-medium text-gray-800">
                  Average Salary:{" "}
                  <span className="font-bold text-green-600">
                    ₦{career.average_salary_naira.toLocaleString()} per year
                  </span>
                </p>
                <div>
                  <h3 className="mb-2 font-medium text-gray-800">
                    Popular Companies:
                  </h3>
                  <ul className="list-disc list-inside">
                    {career.popular_companies.map((company, companyIndex) => (
                      <li key={companyIndex} className="text-sm text-gray-600">
                        {company}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </AuthLayout>
  );
}

export default CareerOptions;
