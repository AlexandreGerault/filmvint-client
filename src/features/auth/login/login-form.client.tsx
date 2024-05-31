'use client';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { loginSchema } from '@/features/auth/login/login-schema.hybrid';
import { login } from '@/features/auth/login/login.client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form';
import { Input } from '../../../components/ui/input';

interface LoginError {
  errors: {
    email?: string;
    password?: string;
  };
}

export function LoginForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationKey: ['auth'],
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(['auth'], data);
      router.push('/');
    },
    onError: (loginError: LoginError) => {
      const errorKeys = Object.keys(loginError.errors) as Array<keyof LoginError['errors']>;

      errorKeys.forEach((key) => {
        form.setError(key, {
          type: 'manual',
          message: loginError.errors[key],
        });
      });

      queryClient.setQueryData(['auth'], null);
    },
    onSettled: async () => {
      return queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <Form {...form}>
      <form
        className="space-y-4"
        onSubmit={form.handleSubmit(() => {
          loginMutation.mutateAsync(form.getValues());
        })}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse e-mail</FormLabel>
              <FormControl>
                <Input id="email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input id="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Se connecter
        </Button>
      </form>
    </Form>
  );
}
