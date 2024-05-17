import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Navigation Bar */}
      <div className='flex gap-2 p-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>{' '}
        <Link to='/dashboard' className='[&.active]:font-bold'>
          Dashboard
        </Link>
        <Link to='/test' className='[&.active]:font-bold'>
          Test
        </Link>
        <Link to='/posts/test' className='[&.active]:font-bold'>
          Posts
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
