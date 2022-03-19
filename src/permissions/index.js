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

export const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      throw new Error("DENIED");
    }
  };