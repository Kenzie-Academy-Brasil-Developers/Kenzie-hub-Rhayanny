import { z } from "zod";

export const resgisterFormScheme = z
  .object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z
      .string()
      .nonempty("O email é obrigatório")
      .email("Forneça um email válido"),
    bio: z.string().nonempty("A BIO é obrigatória"),
    contact: z.string().nonempty("O Contato é obrigatório"),
    course_module: z.string().nonempty("O Módulo é obrigatório"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "São necessários pelo menos 8 caracteres.")
      .regex(/[A-Z]+/, "É necessário pelo menos uma letra maiuscula.")
      .regex(/[A-Z]+/, " É necessário pelo menos uma letra minuscula. ")
      .regex(/[0-9]+/, "É necessário pelo menos um numero.")
      .regex(
        /[!@#$%^&*()+{}[\]:;<>,.?~\/]/,
        "É necessário pelo menos um caracter especial."
      ),

    confirmPassword: z.string().nonempty("A senha é obrigatória"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As Senhas não correspondem ",
    path: ["confirmPassword"],
  });
