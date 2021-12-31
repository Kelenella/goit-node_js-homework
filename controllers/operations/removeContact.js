const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "../db1", "contacts1.json");

const removeContact = async (contactId) => {
  const contacts = await contactsPath();

  const getId = contacts.findIndex(
    (contact) => contactId === contact.id.toString()
  );

  if (getId === -1) {
    return;
  }

  const update = contacts.splice(getId, 1);
  await fs.writeFile(
    path.join(__dirname, "../db1", "contacts1.json"),
    JSON.stringify(contacts, null, 2)
  );

  return update;
};

module.exports = removeContact;
