import React, { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { User } from "@/types";
import { useParams } from "react-router-dom";
import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";

function Mentor() {
  const [mentor, setMentor] = useState<User | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchMentor();
  }, [id]);

  const fetchMentor = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get<{ responseObject: User }>(`/mentors/${id}`);
      setMentor(res.data.responseObject);
    } catch (error) {
      console.error("Error fetching mentor", error);
      setError("Failed to load mentor profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    // Implement the logic to send a message
    console.log("Sending message:", message);
    // Reset the message input after sending
    setMessage("");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!mentor) return <div>Mentor not found</div>;

  return (
    <AuthLayout>
      <DashboardLayout>
        <div className="max-w-2xl p-4 mx-auto">
          <h1 className="mb-4 text-2xl font-bold">Profile</h1>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 mr-4 text-2xl font-bold text-white rounded-full bg-brand">
                {mentor.name[0]}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{mentor.name}</h2>
                <p className="text-gray-600">{mentor.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-semibold">Career Field</h3>
                <p>{mentor.careerField}</p>
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn Link</h3>
                <a
                  href={mentor.linkedInProfile}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mentor.linkedInProfile}
                </a>
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>{mentor.location}</p>
              </div>
              <div>
                <h3 className="font-semibold">Portfolio link</h3>
                <a
                  href={mentor.portfolioLink}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mentor.portfolioLink}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="mb-2 text-xl font-semibold">Send a Message</h3>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              className="px-4 py-2 mt-2 text-white rounded-md bg-brand hover:bg-blue-800"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </DashboardLayout>
    </AuthLayout>
  );
}

export default Mentor;
