'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Please fill in all fields.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'GrowthAI Contact <contact@growthai.in>', 
      to: ['contact@growthai.in'],
      subject: `New Lead: ${name} from GrowthAI`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #10B981; border-radius: 10px; background-color: #0B0F19; color: #ffffff;">
          <h2 style="color: #10B981; border-bottom: 2px solid #10B981; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #1a1f2e; padding: 15px; border-radius: 5px; color: #d1d5db;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          <footer style="margin-top: 30px; font-size: 12px; color: #9ca3af;">
            Sent from GrowthAI Landing Page
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { error: `Failed to send email: ${error.message || 'Unknown error'}` };
    }

    return { success: 'Message sent successfully!' };
  } catch (err) {
    console.error('Server Error:', err);
    return { error: 'A server error occurred. Please try again later.' };
  }
}
