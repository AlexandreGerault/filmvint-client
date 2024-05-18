import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input";
import { Link } from "@/components/ui/link";
import { PageTitle } from "@/components/ui/page-title";

export default function Inscription() {
  return (
    <div className="max-w-96 w-full">
      <PageTitle>Inscription</PageTitle>

      <form className="space-y-4">
        <InputWithLabel label="Prénom" id="firstname" type="text" />
        <InputWithLabel label="Nom" id="lastname" type="text" />
        <InputWithLabel label="Adresse e-mail" id="email" type="email" />
        <InputWithLabel label="Mot de passe" id="password" type="password" />
        <InputWithLabel
          label="Confirmer le mot de passe"
          id="password_confirm"
          type="password"
        />

        <Button type="submit" className="w-full">
          S&apos;inscrire
        </Button>
      </form>

      <p className="text-sm mt-1 text-center">
        Vous avez déjà un compte ?{" "}
        <Link href="/connexion" variant="primary">
          Connectez-vous
        </Link>
      </p>
    </div>
  );
}
