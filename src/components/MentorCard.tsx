import { User } from "@/types";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

function MentorCard({ mentor }: { mentor: User }) {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-md mx-auto border border-gray-200 rounded-lg shadow-lg">
      <CardContent className="p-6 space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">{mentor.name}</h2>
          <p className="text-sm text-muted-foreground">
            Field: {mentor.careerField}
          </p>
          <p className="text-sm text-muted-foreground">
            Location: {mentor.location}
          </p>
          <p className="text-sm text-muted-foreground">
            LinkedIn:{" "}
            <a href="#" className="text-blue-600">
              {mentor.linkedInProfile}
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            Portfolio:{" "}
            <a href="#" className="text-blue-600">
              {mentor.portfolioLink}
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            {mentor.yearOfExperience} years of experience
          </p>
        </div>
        <Button
          className="w-full bg-[#1a1a40] text-white"
          onClick={() => navigate(`/dashboard/mentors/${mentor._id}`)}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
}

export default MentorCard;
