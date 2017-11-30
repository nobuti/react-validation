export const validEmail = emails => {
  if (emails === '') {
    return true;
  }

  const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  const target = emails.split(',').map(i => i.trim());

  return target.every(email => {
    return reg.test(email);
  });
};

export const required = value => {
  return value.trim().length > 0;
};

export const lessThan = length => {
  return value => {
    return value.length < length;
  };
};

export const validate = (state, validations) => {
  return Object.keys(validations).reduce((memo, key) => {
    const rules = validations[key];
    const value = state[key];
    const valid = rules.every(rule => {
      return rule(value);
    });

    if (!valid) {
      memo[key] = true;
    }

    return memo;
  }, {});
};
