import { z } from 'zod';

export interface RegisterType {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

export const registerSchema = z.object({
  email: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  password: z.string(),
});
