export class TgUser {
  id?: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  usernames?: string;
  language_code?: string;
  photo_url?: string;
}

export const tg = window.Telegram.WebApp;
