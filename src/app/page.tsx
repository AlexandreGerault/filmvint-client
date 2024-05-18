import { MovieCard } from "@/components/movies/movie-card";
import { Link } from "@/components/ui/link";
import { SectionTitle } from "@/components/ui/section-title";
import { Metadata } from "next";

const Movies = [
  {
    title: "Les tontons flingueurs",
    label: "Voter",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjEzMTU2MjY1M15BMl5BanBnXkFtZTYwODA5Nzg4._V1_FMjpg_UX337_.jpg",
    width: 337,
    height: 475,
  },
  {
    title: "On a retrouvé la septième compagnie",
    label: "Voter",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWFiNDc5MjQtODM2OS00ZWNlLWJlZTgtMDg1YWNiODYzZTA2XkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_FMjpg_UX613_.jpg",
    width: 572,
    height: 769,
  },
  {
    title: "La grande vadrouille",
    label: "Voter",
    poster:
      "https://m.media-amazon.com/images/M/MV5BODc0NjVhZTktYjFiMy00YmRiLWJiZDAtODBkZDI2OTkwNjRjXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_FMjpg_UY4724_.jpg",
    width: 574,
    height: 769,
  },
  {
    title: "L'incorrigible",
    label: "Voter",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWVmOTQ0ZDgtZTE5Ny00MTY3LWE0YmQtOTRkOTJlNDY4NjM5XkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_FMjpg_UX758_.jpg",
    width: 569,
    height: 769,
  },
] as const;

export const metadata: Metadata = {
  title: "Filmvint - Association de diffusion de films anciens",
  description:
    "Filmvint est une association fictive de diffusion de films anciens.",
};

export default function Home() {
  return (
    <div className="flex flex-col px-4 lg:px-24 py-4 lg:pb-32">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Filmvint
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600"></p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="#" variant="primary-button">
                Devenir membre
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                En savoir plus <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SectionTitle>Le prochain vote</SectionTitle>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {Movies.map((movie) => (
            <MovieCard
              key={movie.title}
              type="link"
              actionProps={{ href: "#" }}
              {...movie}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
