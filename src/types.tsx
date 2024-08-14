export interface QuestionPayload {
  questionId: string;
  category: string;
  text: string;
  options: string[] | null;
  responseType: string;
  answer: string[] | string;
}
