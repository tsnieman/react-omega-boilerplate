import { schema } from 'normalizr';

export const ACTIONS = {
  FETCH_ENTITY: 'FETCH_ENTITY',
  SET_ENTITIES: 'SET_ENTITIES',
};

const userSchema = new schema.Entity('users',
  // definition
  {},

  // options
  {
    idAttribute: (user) => user.login.toLowerCase(),
  },
);

export const SCHEMAS = {
  USER: userSchema,
  USER_ARRAY: schema.Array[userSchema],
};
