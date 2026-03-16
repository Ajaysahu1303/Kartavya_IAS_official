// Auto-extract YouTube Video ID from any URL format
export const extractYouTubeId = (input) => {
  if (!input) return '';
  const str = input.trim();

  // youtube.com/watch?v=ID
  const longMatch = str.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (longMatch) return longMatch[1];

  // youtu.be/ID
  const shortMatch = str.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  // youtube.com/embed/ID
  const embedMatch = str.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  // Already a clean ID (11 chars)
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) return str;

  // Return as-is (user might still be typing)
  return str;
};
