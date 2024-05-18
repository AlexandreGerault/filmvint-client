import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input";
import { Link } from "@/components/ui/link";
import { PageTitle } from "@/components/ui/page-title";

export default function Connexion() {
  return (
    <div className="max-w-96 w-full">
      <PageTitle>Connexion</PageTitle>

      <form className="space-y-4">
        <InputWithLabel label="Adresse e-mail" id="email" type="email" />
        <InputWithLabel label="Mot de passe" id="password" type="password" />

        <Button type="submit" className="w-full">
          Se connecter
        </Button>
      </form>

      <p className="text-sm mt-1 text-center">
        Vous n&apos;avez pas de compte ?{" "}
        <Link href="/inscription" variant="primary">
          Inscrivez-vous
        </Link>
      </p>
    </div>
  );
}
