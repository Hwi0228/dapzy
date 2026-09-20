import { useQuery } from '@tanstack/react-query';
import { questionsApi } from '@/api';
import type { Question } from '@/types';

const DIFFICULTY_LABELS: Record<number, string> = {
  1: '⭐ 매우 쉬움',
  2: '⭐⭐ 쉬움',
  3: '⭐⭐⭐ 보통',
  4: '⭐⭐⭐⭐ 어려움',
  5: '⭐⭐⭐⭐⭐ 매우 어려움',
};

const TYPE_LABELS: Record<string, string> = {
  multiple_choice: '객관식',
  short_answer: '단답형',
  essay: '서술형',
};

function QuestionCard({ question }: { question: Question }) {
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '20px',
      background: 'white',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{
          background: '#dbeafe',
          color: '#1e40af',
          padding: '2px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '600',
        }}>
          {TYPE_LABELS[question.question_type] ?? question.question_type}
        </span>
        <span style={{ fontSize: '12px', color: '#9ca3af' }}>
          {DIFFICULTY_LABELS[question.difficulty]}
        </span>
      </div>
      <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#111827' }}>
        {question.title}
      </h3>
      <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '12px' }}>
        {question.content.slice(0, 100)}{question.content.length > 100 ? '...' : ''}
      </p>
      {question.subject && (
        <span style={{
          background: '#f3f4f6',
          color: '#374151',
          padding: '2px 8px',
          borderRadius: '4px',
          fontSize: '12px',
        }}>
          {question.subject}
        </span>
      )}
    </div>
  );
}

function QuestionsPage() {
  const { data: questions, isLoading, isError } = useQuery({
    queryKey: ['questions'],
    queryFn: () => questionsApi.list(),
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>문제 목록</h1>
        <a
          href="/questions/new"
          style={{
            background: '#1d4ed8',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          + 문제 만들기
        </a>
      </div>

      {isLoading && <p style={{ color: '#6b7280' }}>불러오는 중...</p>}
      {isError && <p style={{ color: '#ef4444' }}>문제를 불러오지 못했습니다. 백엔드 서버를 확인해주세요.</p>}

      {questions && questions.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px', color: '#9ca3af' }}>
          <p style={{ fontSize: '48px' }}>📭</p>
          <p>아직 문제가 없습니다. 첫 번째 문제를 만들어보세요!</p>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
        {questions?.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}

export default QuestionsPage;
