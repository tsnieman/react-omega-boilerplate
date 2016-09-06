import { Schema, arrayOf } from 'normalizr';

export const ACTIONS = {
  FETCH_ENTITY: 'FETCH_ENTITY',
  SET_ENTITIES: 'SET_ENTITIES',
};

const userSchema = new Schema('users', {
  idAttribute: (user) => user.login.toLowerCase(),
});

export const SCHEMAS = {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
};
