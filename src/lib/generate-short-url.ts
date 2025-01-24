import { customAlphabet } from "nanoid";

const generateShortCode = () => {
  // Nanoid for generating unique short codes
  const uid = customAlphabet(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    8
  );

    return uid();
};

export default generateShortCode;
