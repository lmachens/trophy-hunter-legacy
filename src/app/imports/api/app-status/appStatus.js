import TimestampedCollection from '../timestampedCollection';

const AppStatus = new TimestampedCollection('AppStatus');

AppStatus.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
});

export default AppStatus;
