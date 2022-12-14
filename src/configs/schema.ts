import { z } from "zod";

const names = ["John", "Jane", "Jack", "Jill"];

export const helloSchema = z.object({
  name: z.string().refine((name) => names.includes(name)),
  email: z.string().email(),
});
