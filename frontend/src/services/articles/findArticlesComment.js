import fakeArticlesComment from "@assets/data/fakeArticlesComment.json";

const findArticlesComment = (id) => {
  return fakeArticlesComment.filter((elem) => id === elem.articleId);
};

export default findArticlesComment;
