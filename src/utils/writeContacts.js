import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Failed to write contacts:', error);
  }
};
