import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import * as Yup from 'yup';

const prisma = new PrismaClient();

const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
  recaptcha: Yup.string().required('ReCAPTCHA is required'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await contactFormSchema.validate(req.body, { abortEarly: false });

    const { name, email, message, recaptcha } = req.body;

    // Verify ReCAPTCHA
    const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`, {
      method: 'POST',
    });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return res.status(400).json({ error: 'ReCAPTCHA verification failed' });
    }

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });

    res.status(200).json({ success: true, message: 'Message sent successfully', contactMessage });
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
}
