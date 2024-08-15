import MentorCard from "@/components/MentorCard";
import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import axios from "@/lib/axios";
import { User } from "@/types";
import { useEffect, useState } from "react";

function Mentors() {
  const [mentors, setMentors] = useState<User[]>([]);

  const fetchMentors = async () => {
    try {
      const res = await axios.get<{ responseObject: { docs: User[] } }>(
        "/mentors"
      );
      setMentors(res.data.responseObject.docs);
    } catch (error) {
      console.error("Error fetching mentors:", error);
    }
  };

  useEffect(() => {
    void fetchMentors();
  }, []);

  return (
    <AuthLayout>
      <DashboardLayout>
        <div className="container p-4 mx-auto">
          <h1 className="mb-6 text-3xl font-bold text-gray-800">Mentors</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {mentors.map((mentor: User) => (
              <MentorCard key={mentor._id} mentor={mentor} />
            ))}
          </div>
        </div>
      </DashboardLayout>
    </AuthLayout>
  );
}

export default Mentors;
