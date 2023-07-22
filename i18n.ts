import { getRequestConfig } from 'next-intl/server';
import fs from 'fs';
import path from 'path';

const getTranslations = async (locale: string) => {
  const messagesDir = path.resolve(`./messages/${locale}`);
  const filenames = fs.readdirSync(messagesDir);
  const messages: any = {};

  for (const filename of filenames) {
    const namespace = path.basename(filename, '.json');
    const filePath = path.join(messagesDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    messages[namespace] = JSON.parse(fileContent);
  }

  return messages;
};

export default getRequestConfig(async ({ locale }) => {
  const messages = await getTranslations(locale);
  return { messages };
});
