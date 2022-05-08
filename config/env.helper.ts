import { existsSync } from 'fs';
import { resolve }    from 'path';

export function getEnvPath(dest: string): string {
  console.log(`dest: ${dest}`);
  const env: string | undefined = process.env.NODE_ENV;
  const fallback: string = resolve(`${dest}/.env`);
  const filename: string = env ? `${env}.env` : 'development.env';
  let filePath: string = resolve(`${dest}/${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  return filePath;
}