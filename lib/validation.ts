import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Invalid characters in first name'),

  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Invalid characters in last name'),

  email: z.string()
    .email('Invalid email address')
    .max(100, 'Email too long')
    .toLowerCase(),

  phone: z.string()
    .regex(/^[\d\s\-\+\(\)]+$/, 'Invalid phone number')
    .min(10, 'Phone number too short')
    .max(20, 'Phone number too long')
    .optional()
    .or(z.literal('')),

  company: z.string()
    .max(100, 'Company name too long')
    .optional()
    .or(z.literal('')),

  service: z.enum([
    'petroleum',
    'precious-metals',
    'minerals',
    'logistics',
    'partnerships',
    'financial',
    'other',
    ''
  ]).optional(),

  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message too long')
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Chat API validation schema
export const chatMessageSchema = z.object({
  message: z.string()
    .min(1, 'Message cannot be empty')
    .max(1000, 'Message too long')
    .trim(),

  history: z.array(z.object({
    text: z.string(),
    isUser: z.boolean(),
  }))
  .max(20, 'History too long')
  .optional()
  .default([]),
});

export type ChatMessageData = z.infer<typeof chatMessageSchema>;
