import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import techcareers from "@/data/techcareers.json";

function CareerOptions() {
  return (
    <AuthLayout>
      <DashboardLayout>
        <div className="py-8 mx-auto">
          <h1 className="mb-6 text-3xl font-bold">Tech Career Options</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {techcareers.map((career, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-2 text-xl font-semibold">{career.title}</h2>
                <p className="mb-4 text-gray-600">{career.description}</p>
                <p className="mb-2 font-medium">
                  Average Salary: ₦
                  {career.average_salary_naira.toLocaleString()} per year
                </p>
                <div>
                  <h3 className="mb-1 font-medium">Popular Companies:</h3>
                  <ul className="list-disc list-inside">
                    {career.popular_companies.map((company, companyIndex) => (
                      <li key={companyIndex} className="text-gray-600">
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
