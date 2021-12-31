const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "../db1", "contacts1.json");

const readContent = async () => {
  const contentJson = await fs.readFile(contactsPath, "utf8");
  const result = JSON.parse(contentJson);
  return result;
};

const addContact = async (name, email, phone) => {
  const contacts = await readContent();

  const newContact = { name, email, phone, id: crypto.randomUUID() };

  contacts.push(newContact);

  await fs.writeFile(
    path.join(__dirname, "../db1", "contacts1.json"),
    JSON.stringify(contacts, null, 2)
  );

  return newContact;
};

module.exports = addContact;
