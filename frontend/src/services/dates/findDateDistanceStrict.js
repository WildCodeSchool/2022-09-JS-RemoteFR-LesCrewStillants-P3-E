import { formatDistanceStrict, parse } from "date-fns";

const findDateDistanceStrict = (date) => {
  return formatDistanceStrict(
    new Date(parse(date, "yyyy-MM-dd hh:mm:ss", new Date())),
    new Date()
  );
};

export default findDateDistanceStrict;
