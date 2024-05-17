import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public-routes/posts/$postId')({
  component: GetPosts,
});

function GetPosts() {
  const { postId } = Route.useParams();

  return <div>Hello /_public-routes/posts/{postId}!</div>;
}
