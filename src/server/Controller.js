const BananaOrder = require('./Model');

const bananaController = {};

bananaController.postOrder = (req, res, next) => {
  const { startDate, numberOfDays } = req.body;
  const newBananaOrder = new BananaOrder({ startDate, numberOfDays });
  BananaOrder.create(newBananaOrder, (err, bananaOrder) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.locals.bananaOrder = bananaOrder;
      next();
    }
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