import { Link } from '@/components/ui/link';
import { PageTitle } from '@/components/ui/page-title';
import { LoginForm } from '@/features/auth/login/login-form.client';
import { guestOnly } from '@/features/auth/user.server';

export default async function Connexion() {
  await guestOnly();

  return (
    <div className="w-full max-w-96">
      <PageTitle>Connexion</PageTitle>

      <LoginForm />

      <p className="mt-1 text-center text-sm">
        Vous n&apos;avez pas de compte ?{' '}
        <Link href="/inscription" variant="primary">
          Inscrivez-vous
        </Link>
      </p>
    </div>
  );
}
