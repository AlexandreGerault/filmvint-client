import Image from "next/image";
import { Button, ButtonProps } from "../ui/button";
import { Link, LinkProps } from "../ui/link";

type BaseProps = {
  title: string;
  poster: string;
  label: string;
};

type Props = BaseProps &
  (
    | {
        type: "button";
        actionProps: ButtonProps;
      }
    | { type: "link"; actionProps: LinkProps }
  );

export function MovieCard({ poster, title, label, ...props }: Props) {
  return (
    <article
      className="rounded-lg shadow border overflow-hidden h-full grid"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <header className="h-80 lg:h-96 w-full relative">
        <Image src={poster} alt="Poster" layout="fill" objectFit="cover" />
      </header>

      <p className="p-4 text-center h-full flex justify-center items-center">
        {title}
      </p>

      {props.type === "button" ? (
        <Button {...props.actionProps}>{label}</Button>
      ) : (
        <Link
          {...props.actionProps}
          variant="primary-button"
          className="w-full text-center h-fit"
        >
          {label}
        </Link>
      )}
    </article>
  );
}
