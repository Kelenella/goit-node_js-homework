const chalk = require("chalk");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./operations");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contactById = await getContactById(id);
      if (contactById) {
        console.log(chalk.yellow("Contact found"));
        console.log(contactById);
      } else {
        console.log(chalk.red("Contact NOT found"));
      }
      break;

    case "add":
      const contact = await addContact(name, email, phone);
      console.log(chalk.green("Add new contact"));
      console.log(contact);
      break;

    case "remove":
      const removeContactById = await removeContact(id);
      if (removeContactById) {
        console.log(chalk.blue("Contact was deleted"));
        console.log(removeContactById);
        return;
      }
      console.log(chalk.red("Contact NOT found"));
      break;

    default:
      console.warn(chalk.red("Unknown action type!"));
  }
};

module.exports = invokeAction;
