import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export default class TimestampedCollection extends Mongo.Collection {
  insert(doc, callback) {
    if (Meteor.isServer) {
      if (!doc.createdAt) {
        doc.createdAt = new Date();
      }
      doc.updatedAt = doc.createdAt;
    }
    const result = super.insert(doc, callback);
    return result;
  }

  upsert(selector, modifier, options, callback) {
    if (Meteor.isServer) {
      const date = new Date();
      if (!modifier.$setOnInsert) {
        modifier.$setOnInsert = {};
      }
      if (!modifier.$setOnInsert.createdAt) {
        modifier.$setOnInsert.createdAt = date;
      }
      if (!modifier.$set) {
        modifier.$set = {};
      }
      if (!modifier.$set.updatedAt) {
        modifier.$set.updatedAt = date;
      }
    }
    const result = super.upsert(selector, modifier, options, callback);
    return result;
  }

  update(selector, modifier, options, callback) {
    if (Meteor.isServer) {
      if (!modifier.$set) {
        modifier.$set = {};
      }
      if (!modifier.$set.updatedAt) {
        modifier.$set.updatedAt = new Date();
      }
    }
    const result = super.update(selector, modifier, options, callback);
    return result;
  }

  remove(selector, callback) {
    return super.remove(selector, callback);
  }
}
