import { ArrowRight } from 'lucide-react';

export default function SignIn(): JSX.Element {
  return (
    <a
      className='btn-sm hidden sm:block text-slate-300 hover:text-white transition duration-150 ease-in-out group relative no-underline'
      href='https://my.monetr.app/'
    >
      <span className='relative inline-flex items-center text-nowrap'>
        Sign In
        <ArrowRight className='h-5 w-5' />
      </span>
    </a>
  );
}
