import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_public-routes/')({
  component: () => <div>Hello /!</div>,
});
