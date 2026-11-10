import { z } from "zod";

// One rule set for the whole form. Messages are written for visitors, not developers.
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 letters)."),
  email: z.string().trim().min(1, "Please enter your e-mail address.").email("Please enter an e-mail address like name@example.com."),
  subject: z.string().trim().min(3, "Please enter a subject (at least 3 letters)."),
  message: z.string().trim().min(10, "Please write a message (at least 10 characters).").max(2000, "Please keep your message under 2000 characters."),
});

export const FIELDS = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "email", label: "E-mail address", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
  { name: "message", label: "Message", type: "textarea", autoComplete: "off" },
];
