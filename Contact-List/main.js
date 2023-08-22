const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const contacts = [];

function addContact() {
  rl.question('Enter the name: ', name => {
    rl.question('Enter the phone number: ', phoneNumber => {
      contacts.push({ name, phoneNumber });
      console.log('Contact added successfully.');
      mainMenu();
    });
  });
}

function viewContacts() {
  if (contacts.length === 0) {
    console.log('No contacts found.');
  } else {
    console.log('Contacts:');
    contacts.forEach(contact => {
      console.log(`Name: ${contact.name}, Phone Number: ${contact.phoneNumber}`);
    });
  }
  mainMenu();
}

function searchContact() {
  rl.question('Enter the name to search: ', name => {
    const foundContact = contacts.find(contact => contact.name === name);
    if (foundContact) {
      console.log(`Contact found - Name: ${foundContact.name}, Phone Number: ${foundContact.phoneNumber}`);
    } else {
      console.log('Contact not found.');
    }
    mainMenu();
  });
}

function mainMenu() {
  console.log('1. Add a contact');
  console.log('2. View all contacts');
  console.log('3. Search for a contact');
  console.log('4. Exit');

  rl.question('Enter your choice: ', choice => {
    switch (choice) {
      case '1':
        addContact();
        break;
      case '2':
        viewContacts();
        break;
      case '3':
        searchContact();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please select a valid option.');
        mainMenu();
        break;
    }
  });
}

console.log('Welcome to the Contact Manager App!');
mainMenu();
