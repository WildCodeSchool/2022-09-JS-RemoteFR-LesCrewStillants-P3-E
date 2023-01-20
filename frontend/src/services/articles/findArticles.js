import fakeArticles from "@assets/data/fakeArticles.json";

const findArticles = (id) => {
  return fakeArticles.filter((elem) => id === elem.id)[0];
};

export default findArticles;
