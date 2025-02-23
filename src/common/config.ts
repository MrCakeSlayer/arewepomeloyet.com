export const DATABASE_URL = process.env.DATABASE_URL ?? '';
export const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET ?? '';

// TODO: These should ideally be environment variables, but Next.js is broken
export const DISCORD_CLIENT_ID = '1115606938441502732';
export const DISCORD_REDIRECT_URI =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://arewepomeloyet.com/callback';

export const BOT_HTTP_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'https://arewepomeloyet-bot.fly.dev'
    : 'http://arewepomeloyet-bot.internal:8080';

export const DISCORD_API_HOST = 'https://discord.com/api/v10';
export const DISCORD_AUTHORIZE_URL = [
  'https://discord.com',
  '/oauth2/authorize',
  `?client_id=${DISCORD_CLIENT_ID}`,
  `&redirect_uri=${encodeURIComponent(DISCORD_REDIRECT_URI)}`,
  '&response_type=code',
  '&scope=identify',
].join('');

export const DISCORD_BOT_AUTHORIZE_URL = [
  'https://discord.com',
  '/oauth2/authorize',
  `?client_id=${DISCORD_CLIENT_ID}`,
  '&permissions=0',
  '&scope=bot',
].join('');

export const GITHUB_REPO_URL = 'https://github.com/hampuskraft/arewepomeloyet.com';
