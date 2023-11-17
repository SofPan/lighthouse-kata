const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const getContactBook = (addressBook, contactName, currentIndex) => {
  if (currentIndex >= addressBook.length) {
    return false;
  }

  if (addressBook[currentIndex]["name"] !== contactName) {
    return getContactBook(addressBook, contactName, currentIndex + 1);
  }
  return currentIndex;
};

/**
 * @function findFriend takes three parameters
 * @param addressBook the contact data object
 * @param contactName the name of the contact in question
 * @param contactField the contact field we want back (email, phone, etc.)
 * @returns contact name and requested field
 *   OR returns "Not found" if the field is not found
 */

const findFriend = (addressBook, contactName, contactField) => {
  const foundFriend = {};

  const contactIndex = getContactBook(addressBook, contactName, 0);
  if (contactIndex === false) {
    return "Not found";
  }

  const contactList = addressBook[contactIndex];
  const friendName = contactList["friends"][0];
  const friendIndex = getContactBook(addressBook, friendName, 0);
  const friendContactField = addressBook[friendIndex][contactField];
  if (!friendContactField) {
    return "Not found";
  }

  foundFriend["name"] = friendName;
  foundFriend[contactField] = friendContactField;
  return foundFriend;
};

// console.log(findFriend(contacts, "Abbott", "phone")); // => { name: "Costello", phone: "767 676 7676" }

// console.log(findFriend(contacts, "Buster", "email")); // => { name: "Hardy", email: "hardy@hardyharhar.com" }

// console.log(findFriend(contacts, "Bob", "phone")); // => "Not found"

// console.log(findFriend(contacts, "Costello", "birthday")); // => "Not found" (but if Costello's first friend, Abbott, did have a birthday field, then it should work and return that their name and birthday information)

const diagnose = [
  {
    "name": "Brendan Eich",
    "language": "JavaScript",
    "worked_for": "Netscape",
    "friends": ["Yukihiro Matsumoto", "Guido van Rossum"]
  },
  {
    "name": "Guido van Rossum",
    "language": "Python",
    "worked_for": "CWI",
    "friends": ["Brendan Eich", "Yukihiro Matsumoto"]
  },

  {
    "name": "Yukihiro Matsumoto",
    "language": "Ruby",
    "worked_for": "netlab.jp",
    "friends": ["Brendan Eich", "Guido van Rossum"]
  }
];

console.log(findFriend(diagnose, "Khurram", "language"));