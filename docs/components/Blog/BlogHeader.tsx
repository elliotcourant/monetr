import { format, parse } from 'date-fns';

import { useFrontmatter } from '@rspress/core/runtime';

export default function BlogHeader(): JSX.Element {
  const { frontmatter } = useFrontmatter();
  return (
    <div className='flex flex-col gap-1 items-center mb-10 text-center'>
      <span className='text-dark-monetr-content'>
        {format(parse((frontmatter as Record<string, string>).date, 'yyyy/MM/dd', new Date()), 'MMMM dd, yyyy')}
      </span>
      <div className='flex items-center justify-center relative'>
        <span className='absolute mx-auto flex w-fit bg-gradient-to-r blur-xl opacity-50 from-purple-100 via-purple-200 to-purple-300 bg-clip-text text-5xl/tight sm:text-6xl/tight font-extrabold text-transparent text-center select-none'>
          {(frontmatter as Record<string, string>).title}
        </span>
        <h1 className='relative top-0 mb-auto justify-center flex bg-gradient-to-r items-center from-purple-100 via-purple-200 to-purple-300 bg-clip-text text-5xl/tight sm:text-6xl/tight font-extrabold text-transparent text-center select-auto'>
          {(frontmatter as Record<string, string>).title}
        </h1>
      </div>
      <p className='text-xl text-dark-monetr-content'>{(frontmatter as Record<string, string>).description}</p>
    </div>
  );
}
