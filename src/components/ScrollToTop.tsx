import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') {
      navigate('/', { replace: true });
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
