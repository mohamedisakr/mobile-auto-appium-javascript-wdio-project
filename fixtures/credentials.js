const users = {
  validUser: { email: "tamil@mit.edu", password: "1234tamil" },
  invalidUser: { email: "", password: "coticoti" }, // @mit.edu
  allEmpty: { email: "", password: "" },
};

export const { validUser, invalidUser, allEmpty } = users;
