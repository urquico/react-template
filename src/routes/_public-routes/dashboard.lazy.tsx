import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_public-routes/dashboard')({
  component: () => <div>Hello /dashboard!</div>,
});
