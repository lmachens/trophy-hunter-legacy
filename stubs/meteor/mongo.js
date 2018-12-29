const Collection = function() {};
Collection.prototype.attachSchema = () => {};
Collection.prototype.insert = () => {};
Collection.prototype.update = () => {};
Collection.prototype.remove = () => {};
Collection.prototype.findOne = () => {};
Collection.prototype.find = () => ({
  count: () => 0,
  fetch: () => []
});
Collection.prototype.helpers = () => {};
Collection.prototype.after = {
  insert: () => {},
  update: () => {},
  upsert: () => {}
};
Collection.prototype.before = {
  insert: () => {},
  update: () => {},
  upsert: () => {}
};
Collection.prototype.rawCollection = () => ({
  createIndex: () => {}
});
Collection.prototype.allow = () => {};
Collection.prototype.deny = () => {};
Collection.prototype._ensureIndex = () => {};

export const Mongo = { Collection };
