import { Suspense } from 'react';
import { AuthPage } from '../(login)/auth';

export default function AuthPageRoute() {
  return (
    <Suspense>
      <AuthPage />
    </Suspense>
  );
}