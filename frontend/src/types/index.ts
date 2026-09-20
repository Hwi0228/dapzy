// 문제 타입 정의
export type QuestionType = 'multiple_choice' | 'short_answer' | 'essay';

export interface Question {
  id: string;
  title: string;
  content: string;
  question_type: QuestionType;
  choices?: string[];
  answer: string;
  explanation?: string;
  subject?: string;
  tags?: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  author_id: string;
  created_at: string;
  updated_at: string;
}

export interface QuestionCreate {
  title: string;
  content: string;
  question_type: QuestionType;
  choices?: string[];
  answer: string;
  explanation?: string;
  subject?: string;
  tags?: string[];
  difficulty: number;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  is_public: boolean;
  author_id: string;
  created_at: string;
  questions?: Question[];
}

export interface QuizCreate {
  title: string;
  description?: string;
  is_public: boolean;
}

export interface User {
  id: string;
  username: string;
  email: string;
  is_active: boolean;
  created_at: string;
}

export interface Token {
  access_token: string;
  token_type: string;
}

// API 응답 공통 타입
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  skip: number;
  limit: number;
}
