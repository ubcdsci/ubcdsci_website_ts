export {};

declare global {
  interface Window {
    grecaptcha: any;
  }

  interface UserFormData {
    username: any;
    password: any;
    captchaToken: string;
  }

  interface EventPostFormData {
    id: string;
    creator: string;
    title: string;
    description: string;
    date?: Date;
    location?: string;
    imageUpload?: string;
    tags?: string[];
  }
}
