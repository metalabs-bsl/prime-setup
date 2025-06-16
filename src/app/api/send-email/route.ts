import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, recaptcha } = await request.json();

    if (!recaptcha) {
      return NextResponse.json(
        { 
          success: false,
          message: 'reCAPTCHA verification failed' 
        },
        { status: 400 }
      );
    }

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`;
    const recaptchaResponse = await fetch(verificationUrl, {
      method: 'POST',
    });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { 
          success: false,
          message: 'reCAPTCHA verification failed',
          details: recaptchaData['error-codes'] 
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD, 
      },
    });

    await transporter.sendMail({
      from: `"Prime Setup UAE" <${process.env.GMAIL_EMAIL}>`,
      to: email,
      subject: 'Thank you for your request',
      html: `
        <h1>Thank you for your request</h1>
        <p>Dear ${name},</p>
        <p>Your submission has been received.</p>
        <p>Our team will contact you within the next hour.</p>
        <p>We appreciate your interest and look forward to speaking with you.</p>
        <br/>
        <p>Best regards,</p>
        <p>Prime Setup UAE Team</p>
      `,
    });

    await transporter.sendMail({
      from: `"Form Submission" <${process.env.GMAIL_EMAIL}>`,
      to: process.env.GMAIL_EMAIL_RECIEVER,
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br/>
        <p>This message was sent from the contact form on the Prime setup website.</p>
      `,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Emails sent successfully' 
    }, { 
      status: 200 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Error sending email',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}