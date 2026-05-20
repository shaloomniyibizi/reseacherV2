import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    // Todo: Dashboard loading page
    <div className='flex items-center justify-center h-screen'>
      <Loader className='animate-spin' />
    </div>
  );
}
