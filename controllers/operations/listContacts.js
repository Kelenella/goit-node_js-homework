const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "../db1", "contacts1.json");

const readContent = async () => {
  const contentJson = await fs.readFile(contactsPath, "utf8");
  const result = JSON.parse(contentJson);
  return result;
};

const listContacts = async () => {
  return await readContent();
};

module.exports = listContacts;
