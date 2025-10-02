import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Failed to remove contacts:', error);
  }
};

removeAllContacts();
