import dataset from "../../../public/hsk1-dataset.json";

export default (req, res) => {
  res.statusCode = 200;
  res.json(dataset);
};
