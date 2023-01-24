import fakeMembersList from "@assets/data/fakeUser.json";

const findUser = (id) => {
  return fakeMembersList.filter((elem) => id === elem.id)[0];
};

export default findUser;
