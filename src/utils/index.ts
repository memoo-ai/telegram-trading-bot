import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

export function escapeMarkdownV2(text: string): string {
  return text.replace(/([_\*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}

/**
 * 加密私钥
 * @param privateKey 原始私钥
 * @returns 加密后的私钥(base64格式)
 */
export function encryptPrivateKey(privateKey: string): string {
  try {
    // 读取公钥
    const publicKeyPath = path.resolve(__dirname, '../../../pem/public.pem');
    const publicKey = fs.readFileSync(publicKeyPath, 'utf8');

    // 加密私钥
    const buffer = Buffer.from(privateKey, 'utf8');
    const encrypted = crypto.publicEncrypt(
      { key: publicKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING },
      buffer
    );
    return encrypted.toString('base64');
  } catch (error) {
    console.error('Error encrypting private key:', error);
    throw new Error('Failed to encrypt private key');
  }
}

/**
 * 解密私钥
 * @param encryptedPrivateKey 加密后的私钥(base64格式)
 * @returns 解密后的原始私钥
 */
export function decryptPrivateKey(encryptedPrivateKey: string): string {
  try {
    // 读取私钥
    const privateKeyPath = path.resolve(__dirname, '../../../pem/private.pem');
    const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

    // 解密私钥
    const buffer = Buffer.from(encryptedPrivateKey, 'base64');
    const decrypted = crypto.privateDecrypt(
      {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        passphrase: process.env.RSA_PASSPHRASE
      },
      buffer
    );
    return decrypted.toString('utf8');
  } catch (error) {
    console.error('Error decrypting private key:', error);
    throw new Error('Failed to decrypt private key');
  }
}