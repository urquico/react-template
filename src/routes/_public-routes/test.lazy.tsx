import { createLazyFileRoute } from '@tanstack/react-router';
import { ReactNode } from 'react';

export const Route = createLazyFileRoute('/_public-routes/test')({
  component: () => <Test>Kurt Jacob Urquico</Test>,
});

function Test({ children }: { children: ReactNode }) {
  return <div>Hello /test! {children}</div>;
}
