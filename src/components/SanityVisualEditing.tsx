import { VisualEditing } from '@sanity/visual-editing/react';

export default function SanityVisualEditing() {
  return (
    <VisualEditing
      portal
      history={{
        subscribe: () => () => {},
        update: (update) => {
          if (update.type === 'push' || update.type === 'replace') {
            window.location.href = update.url;
          } else if (update.type === 'pop') {
            window.history.back();
          }
        },
      }}
    />
  );
}
