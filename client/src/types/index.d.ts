export {};

declare global {
  interface Window {
    grecaptcha: any;
  };

  interface UserFormData {
    username: any;
    password: any;
    captchaToken: string;
  }
};
