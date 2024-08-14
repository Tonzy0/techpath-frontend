import questions from "@/data/careerpath.json";
import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import { QuestionPayload } from "@/types";
import { useState } from "react";

function CareerAssessments() {
  const mappedSurveys: QuestionPayload[] = questions.map((question) => ({
    questionId: question.question_id,
    category: question.category,
    text: question.question_text,
    responseType: question.response_type,
    options: question.options ?? null,
    answer: question.response_type === "multichoice" ? [] : "",
  }));

  const [survey, setSurvey] = useState<QuestionPayload[]>(mappedSurveys);

  const handleOptionClick = (option: string, questionId: string) => {
    setSurvey((prevSurvey) =>
      prevSurvey.map((q) => {
        if (q.questionId !== questionId) return q;

        if (q.responseType === "multichoice") {
          const updatedAnswer = q.answer as string[];
          if (updatedAnswer.includes(option)) {
            return { ...q, answer: updatedAnswer.filter((a) => a !== option) };
          } else {
            return { ...q, answer: [...updatedAnswer, option] };
          }
        } else {
          return { ...q, answer: option };
        }
      })
    );
  };

  const handleTextInput = (value: string, questionId: string) => {
    setSurvey((prevSurvey) =>
      prevSurvey.map((q) =>
        q.questionId === questionId ? { ...q, answer: value } : q
      )
    );
  };

  return (
    <AuthLayout>
      <DashboardLayout>
        <div className="max-w-2xl mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Career Path Assessment</h2>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-lg">
              Answer a few questions to receive personalized recommendations
              that align with your strengths and career goals.
            </h3>
            <form className="flex flex-col gap-5 mt-4">
              {survey.map((question) => (
                <div key={question.questionId} className="mb-6">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="font-medium">{question.text}</p>
                  </div>
                  {question.options && (
                    <div className="flex flex-wrap gap-4 mt-4">
                      {question.options.map((option, key) => (
                        <button
                          key={key}
                          type="button"
                          className={`p-3 border rounded-full transition-colors ${
                            (question.answer as string[]).includes(option)
                              ? "bg-blue-500 text-white"
                              : "border-gray-300 hover:bg-gray-100"
                          }`}
                          onClick={() =>
                            handleOptionClick(option, question.questionId)
                          }
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                  {question.responseType === "text" && (
                    <div className="mt-4">
                      <input
                        className="w-full p-2 transition-colors bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Type your answer here"
                        value={question.answer as string}
                        onChange={(e) =>
                          handleTextInput(e.target.value, question.questionId)
                        }
                      />
                    </div>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="px-6 py-2 mt-6 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Submit Assessment
              </button>
            </form>
          </div>
        </div>
      </DashboardLayout>
    </AuthLayout>
  );
}

export default CareerAssessments;
