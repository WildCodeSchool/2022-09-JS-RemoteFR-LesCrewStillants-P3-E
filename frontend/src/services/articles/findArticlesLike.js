import fakeArticlesLike from "@assets/data/fakeArticlesLike.json";

const findArticlesLike = (id) => {
  return fakeArticlesLike.filter((elem) => id === elem.articleId);
};

export default findArticlesLike;
