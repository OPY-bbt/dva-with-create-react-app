export default {
  namespace: 'homepage',

  state: {
  },

  effects: {
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
