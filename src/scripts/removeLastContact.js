import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Last contact removed successfully.');
  } catch (error) {
    console.error('Failed to remove last contact:', error);
  }
};

removeLastContact();
