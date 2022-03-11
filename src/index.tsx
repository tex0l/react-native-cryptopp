import { NativeModules, Platform } from 'react-native';
import utilsJS from './utils';
import type { Cryptopp } from './types';

const cppinstall = NativeModules.Cryptopp;

if (cppinstall && typeof cppinstall.install === 'function') {
  cppinstall.install();
}

const CryptoppModule: Cryptopp = (global as any).cryptoppModule;

if (!CryptoppModule) {
  const LINKING_ERROR =
    `The package 'react-native-cryptopp' doesn't seem to be linked. Make sure: \n\n` +
    Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
    '- You rebuilt the app after installing the package\n' +
    '- You are not using Expo managed workflow\n';
  throw new Error(LINKING_ERROR);
}

CryptoppModule.utils.randomBytes = (length: number) => {
  const Buffer = global.Buffer ?? require('buffer').Buffer;
  // @ts-ignore
  const bytes = CryptoppModule.utils.randomBytesNative(length);
  return Buffer.from(bytes, 'base64');
};

CryptoppModule.utilsJS = utilsJS;

export default CryptoppModule;
