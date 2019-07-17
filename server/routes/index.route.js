const express = require('express');

const controller = require('../controllers/controller')

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check',
  (req, res) => {
    res.status(200).json({ message: 'OK' });
  }
);

router.route('/visited')
  .post(controller.addVisitor)
  .get(controller.listVisitors)


module.exports = router;
