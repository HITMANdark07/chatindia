import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

export const contactsPermission = () => {
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Contacts',
          'message': 'This app would like to view your contacts.',
          'buttonPositive': 'Please accept bare mortal'
        }
      ).then(Contacts.getAll().then((contacts) => {
          console.log(contacts[23]);
      }).catch((err) => {
          console.log(err);
      })).catch((err) => {
          console.log(err);
      })
}