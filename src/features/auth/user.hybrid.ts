import { z } from 'zod';

export interface User {
  email: string;
}

export const userSchema = z.object({
  email: z.string(),
});
