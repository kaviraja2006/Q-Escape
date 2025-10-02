import { useAuthContext } from '../contexts/AuthContext';

export default function useAuth() {
  const ctx = useAuthContext();
  return ctx;
}


