import { Layout as BasicLayout, Banner } from '@rspress/core/theme-original';
import { useEffect } from 'react';

import QueryClientWrapper from '../components/QueryClientWrapper';
import GithubStars from '../components/GithubStars';
import SignIn from '../components/SignIn';

import './index.css';

function NavTitle() {
  return (
    <a href='/' className='flex items-center gap-3 no-underline'>
      <img alt='monetr logo' className='w-8 h-8 lg:w-10 lg:h-10 rounded-none' src='/logo.svg' />
      <div className='flex items-center justify-center ml-1'>
        <span className='absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl opacity-50 from-purple-100 via-purple-200 to-purple-300 bg-clip-text text-2xl lg:text-3xl box-content font-extrabold text-transparent text-center select-none'>
          monetr
        </span>
        <span className='relative top-0 justify-center flex bg-gradient-to-r items-center from-purple-100 via-purple-200 to-purple-300 bg-clip-text text-2xl lg:text-3xl font-extrabold text-transparent text-center select-auto'>
          monetr
        </span>
      </div>
    </a>
  );
}

function NavExtras() {
  return (
    <div className='flex items-center gap-3'>
      <GithubStars />
      <SignIn />
    </div>
  );
}

function Footer() {
  return (
    <footer className='border-t border-zinc-700 py-6 mt-8'>
      <div className='flex w-full items-center sm:items-start justify-between px-6 md:px-20'>
        <p className='text-sm text-zinc-400'>
          © {new Date().getFullYear()} monetr LLC.
        </p>
        <div className='gap-2 sm:gap-4 flex flex-col sm:flex-row'>
          <a className='hover:underline text-sm text-zinc-400' href='https://status.monetr.app/' target='_blank' rel='noreferrer'>
            Status
          </a>
          <a className='hover:underline text-sm text-zinc-400' href='/contact'>
            Contact
          </a>
          <a className='hover:underline text-sm text-zinc-400' href='/policy/terms'>
            Terms & Conditions
          </a>
          <a className='hover:underline text-sm text-zinc-400' href='/policy/privacy'>
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

const Layout = () => {
  useEffect(() => {
    // Ensure dark mode classes are present
    document.documentElement.classList.add('dark', 'rp-dark');
    document.documentElement.style.colorScheme = 'dark';
  }, []);

  return (
    <QueryClientWrapper>
      <BasicLayout
        beforeNav={
          <Banner
            href='/blog/2025-12-31-similar-transactions'
            message='🎉 Read the latest blog post about similar transactions'
            storageKey='monetr-launched-january-2025'
          />
        }
        navTitle={<NavTitle />}
        afterNavMenu={<NavExtras />}
        bottom={<Footer />}
      />
    </QueryClientWrapper>
  );
};

export * from '@rspress/core/theme-original';
export { Layout };
