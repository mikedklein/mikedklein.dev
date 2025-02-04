'use server';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormState = {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string;
};

export async function contactMe(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const result = contactSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  const { name, email, message } = result.data;

  try {
    const { error } = await resend.emails.send({
      from: 'Mikes Site <mikessite@mikedklein.dev>',
      to: [process.env.MY_EMAIL as string],
      subject: `${name} sent you a message from your website`,
      html: `<p>${message}</p><br /><p>From: ${name} (${email})</p>`,
    });

    if (error) {
      console.error({ error });
      return {
        success: false,
        message: 'Failed to send email. Please try again.',
      };
    }

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error({ error });
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}
