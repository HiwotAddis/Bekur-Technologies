"use client";

export default function NotFound() {
  return (
    <html>
      <body style={{ background: '#10131a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404</h2>
        <p style={{ color: '#ff5555', marginBottom: '1rem' }}>This page could not be found.</p>
        <a href="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>Return Home</a>
      </body>
    </html>
  );
}
