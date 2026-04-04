import { normalizeImagePath } from '@rspress/core/runtime';

export interface BlogMemeProps {
  alt: string;
  src: string;
}

export default function BlogMeme(props: BlogMemeProps): React.JSX.Element {
  return (
    <div className='flex justify-center'>
      <div className='w-1/2 sm:w-1/3 '>
        <img alt={props.alt} className='medium-zoom-image' src={normalizeImagePath(props.src)} />
      </div>
    </div>
  );
}
