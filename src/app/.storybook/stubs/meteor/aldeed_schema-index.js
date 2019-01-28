import SimpleSchema from 'simpl-schema';

// Extend the schema options allowed by SimpleSchema
SimpleSchema.extendOptions([
  'index', // one of Number, String, Boolean
  'unique', // Boolean
  'sparse' // Boolean
]);
