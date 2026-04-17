import { useEffect, useState } from 'react';

export default function DisableDraftMode() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show if NOT inside Sanity Presentation Tool iframe
    setShow(window === window.parent);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 9999,
      }}
    >
      <a
        href="/api/draft-mode/disable"
        style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          background: '#333',
          color: 'white',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: 500,
        }}
      >
        Exit preview
      </a>
    </div>
  );
}
