const BananaOrder = require('./Model');

const bananaController = {};

bananaController.postOrder = (req, res, next) => {
  const { startDate, numberOfDays, totalCost } = req.body;
  const newBananaOrder = new BananaOrder({ startDate, numberOfDays, totalCost });
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

module.exports = bananaController;