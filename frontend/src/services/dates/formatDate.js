const formatDate = (date) => {
  return `${new Date(date)
    .toLocaleDateString("fr-FR")
    .split("/")
    .reverse()
    .join("-")} ${new Date(date).toLocaleTimeString("fr-FR")}`;
};

export default formatDate;
