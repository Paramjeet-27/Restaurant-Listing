const { restaurant } = require("../models/model");

const save = (data) => {
  return restaurant.create(data);
};

const get = (data) => {
  return restaurant.findAll();
};

const edit = (data) => {
  return restaurant.update(data, {
    where: {
      id: data.id,
    },
  });
};

const delete_data = (id) => {
  return restaurant.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  save,
  get,
  edit,
  delete_data,
};
