const BananaOrder = require('./Model');

const bananaController = {};

bananaController.postTask = (req, res, next) => {
  const { item } = req.body;
  const newItem = new BananaOrder({ item });
  newItem.save((err, item) => {
    if (err) return res.json({ error: err });
    res.locals.item = item.item;
    res.locals.id = item._id;
    next();
  });
};

bananaController.getTasks = (req, res, next) => {
  BananaOrder.find({}, (err, items) => {
    if (err) return res.status(400).json({ error: err });
    res.locals.items = items;
    next();
  });
};

bananaController.deleteTask = (req, res, next) => {
  const { id } = req.params;
  const query = { _id: id };
  BananaOrder.findByIdAndDelete(query, (err, deleted) => {
    if (err) return res.status(400).json(err);
    res.locals.task = deleted.task;
    next();
  });
};

module.exports = bananaController;