import api from './client';
import type { Question, QuestionCreate, Quiz, QuizCreate, Token, User } from '@/types';

// ───── Questions ─────
export const questionsApi = {
  list: (params?: { skip?: number; limit?: number; subject?: string }) =>
    api.get<Question[]>('/questions', { params }).then((r) => r.data),

  get: (id: string) =>
    api.get<Question>(`/questions/${id}`).then((r) => r.data),

  create: (data: QuestionCreate) =>
    api.post<Question>('/questions', data).then((r) => r.data),

  update: (id: string, data: Partial<QuestionCreate>) =>
    api.put<Question>(`/questions/${id}`, data).then((r) => r.data),

  delete: (id: string) =>
    api.delete(`/questions/${id}`).then((r) => r.data),
};

// ───── Quizzes ─────
export const quizzesApi = {
  list: (params?: { skip?: number; limit?: number }) =>
    api.get<Quiz[]>('/quizzes', { params }).then((r) => r.data),

  get: (id: string) =>
    api.get<Quiz>(`/quizzes/${id}`).then((r) => r.data),

  create: (data: QuizCreate) =>
    api.post<Quiz>('/quizzes', data).then((r) => r.data),
};

// ───── Auth ─────
export const authApi = {
  register: (data: { username: string; email: string; password: string }) =>
    api.post<User>('/auth/register', data).then((r) => r.data),

  login: (email: string, password: string) => {
    const form = new FormData();
    form.append('username', email);
    form.append('password', password);
    return api.post<Token>('/auth/login', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((r) => r.data);
  },

  me: () =>
    api.get<User>('/users/me').then((r) => r.data),
};
