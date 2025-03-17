import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-Z1TZ5MEDCR', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default useTracker;
