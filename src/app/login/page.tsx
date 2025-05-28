import { Suspense } from 'react';
 
export default function LoginPage() {
  return (
     <div className="p-4">
      <h1 className="text-xl">Login Page</h1>
      <Suspense>
        <p>Form coming soon...</p>
      </Suspense>
     </div>
  );
}