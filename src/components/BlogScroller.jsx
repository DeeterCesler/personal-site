'use client';

import { useEffect, useState } from 'react';

// circle-scroll pulls in jQuery, which throws on import in a Node (no-window)
// context and so cannot be part of the server/build module graph. We load it
// lazily in the browser only. Until it's ready (SSR + first paint) we render the
// article body plainly inside `.body-content` (the selector circle-scroll reads),
// so the full article text is always present in the statically exported HTML.
export default function BlogScroller({ link, children }) {
  const [Scroller, setScroller] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('circle-scroll').then((m) => {
      if (mounted) setScroller(() => m.default);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!Scroller) {
    return <div className="body-content">{children}</div>;
  }

  return <Scroller link={link}>{children}</Scroller>;
}
