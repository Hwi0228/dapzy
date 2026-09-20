function HomePage() {
  return (
    <div>
      <section style={{ textAlign: 'center', padding: '64px 0' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
          📚 답지
        </h1>
        <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '32px' }}>
          함께 만들어가는 공유 문제은행 플랫폼
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a
            href="/questions"
            style={{
              background: '#1d4ed8',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            문제 둘러보기
          </a>
          <a
            href="/questions/new"
            style={{
              background: 'white',
              color: '#1d4ed8',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              border: '2px solid #1d4ed8',
            }}
          >
            문제 만들기
          </a>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '48px' }}>
        {[
          { icon: '✏️', title: '문제 작성', desc: '나만의 문제를 만들고 공유하세요.' },
          { icon: '📖', title: '문제 풀기', desc: '다양한 과목의 문제를 풀어보세요.' },
          { icon: '📋', title: '문제집 만들기', desc: '문제를 모아 나만의 문제집을 구성하세요.' },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: '#f9fafb',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{item.title}</h3>
            <p style={{ color: '#6b7280' }}>{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
