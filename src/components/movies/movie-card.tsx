import Image from 'next/image';

import { Button, ButtonProps } from '../ui/button';
import { Link, LinkProps } from '../ui/link';

type BaseProps = {
  title: string;
  poster: string;
  label: string;
};

type Props = BaseProps & ({ type: 'button'; actionProps: ButtonProps } | { type: 'link'; actionProps: LinkProps });

export function MovieCard({ poster, title, label, ...props }: Props) {
  return (
    <article
      className="grid h-full overflow-hidden rounded-lg border shadow"
      style={{
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <header className="relative h-80 w-full lg:h-96">
        <Image src={poster} alt="Poster" fill style={{ objectFit: 'cover' }} />
      </header>

      <p className="flex h-full items-center justify-center p-4 text-center">{title}</p>

      {props.type === 'button' ? (
        <Button {...props.actionProps} className="rounded-t-none">
          {label}
        </Button>
      ) : (
        <Link {...props.actionProps} variant="primary-button" className="h-fit w-full rounded-t-none text-center">
          {label}
        </Link>
      )}
    </article>
  );
}
