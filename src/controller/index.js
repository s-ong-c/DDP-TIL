const userList = [
  { id: "1", name: "송민석이다", engName: "송민석이다1" },
  { id: "2", name: "송민석이다", engName: "송민석이다2" },
  { id: "3", name: "송민석이다", engName: "송민석이다3" }
];

const getUsers = ctx => {
  ctx.body = userList;
};

const getUser = ctx => {
  const { id } = ctx.params;

  ctx.body = userList.filter(user => user.id === id);
};

module.exports = {
  getUsers,
  getUser
};
