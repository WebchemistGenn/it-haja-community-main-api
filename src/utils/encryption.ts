import { createCipheriv, createDecipheriv, createHash } from 'crypto';
import * as bcrypt from 'bcrypt';

export const generate = async () => {
  const key = createHash('md5').update('test').digest();

  return { key: key.toString('hex') };
};

export const encrypt = async (text: string, secretKey: string) => {
  const secretKeyToBufferArray: Buffer = Buffer.from(secretKey, 'utf8');
  const ivParameter: Buffer = Buffer.from(secretKey.slice(0, 16));
  const cipher = createCipheriv('aes-256-ctr', secretKeyToBufferArray, ivParameter);
  const result = cipher.update(text, 'utf8', 'base64');
  return result + cipher.final('base64');
};

export const decrypt = async (text: string, secretKey: string) => {
  const secretKeyToBufferArray: Buffer = Buffer.from(secretKey, 'utf8');
  const ivParameter: Buffer = Buffer.from(secretKey.slice(0, 16));
  const decipher = createDecipheriv('aes-256-ctr', secretKeyToBufferArray, ivParameter);
  const result = decipher.update(text, 'base64', 'utf8');
  return result + decipher.final('utf8');
};

export const passwordEncrypt = async (password: string) => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
};

export const passwordCompare = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
