export interface QuestionPayload {
  questionId: string;
  category: string;
  text: string;
  options: string[] | null;
  responseType: string;
  answer: string[] | string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  password: string;
  careerField: string;
  yearOfExperience: number;
  location: string;
  linkedInProfile: string;
  portfolioLink: string;
  careerPath: string;
  recommendedCareerPath: string;
  createdAt: Date;
  updatedAt: Date;
}
