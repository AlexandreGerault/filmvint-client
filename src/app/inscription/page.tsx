import { Link } from '@/components/ui/link';
import { PageTitle } from '@/components/ui/page-title';
import { RegisterForm } from '@/features/auth/register/register-form';
import { guestOnly } from '@/features/auth/user.server';

export default async function Inscription() {
  await guestOnly();

  return (
    <div className="w-full max-w-96 py-12">
      <PageTitle>Inscription</PageTitle>

      <RegisterForm />

      <p className="mt-1 text-center text-sm">
        Vous avez déjà un compte ?{' '}
        <Link href="/connexion" variant="primary">
          Connectez-vous
        </Link>
      </p>
    </div>
  );
}
