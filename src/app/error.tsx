"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body style={{ background: '#10131a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong!</h2>
        <pre style={{ color: '#ff5555', marginBottom: '1rem' }}>{error.message}</pre>
        <button
          style={{
            background: '#2563eb',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
