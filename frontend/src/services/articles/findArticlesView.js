import fakeArticlesView from "@assets/data/fakeArticlesView.json";

const findArticlesView = (id) => {
  return fakeArticlesView.filter((elem) => id === elem.articleId);
};

export default findArticlesView;
