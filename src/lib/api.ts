import axios from "axios";

const contactApiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;

export const apiClient = axios.create({
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export type ContactResponse = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  payload: ContactPayload,
): Promise<ContactResponse> {
  if (!contactApiUrl) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message:
        "Thank you for your message. Our admissions team will contact you shortly.",
    };
  }

  const { data } = await apiClient.post<ContactResponse>(contactApiUrl, payload);
  return data;
}
