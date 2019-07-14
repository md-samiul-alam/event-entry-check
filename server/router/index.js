const express = require('express')

const router = express.Router()

/** GET /health-check - Check service health */
router.get('/health-check',
  (req, res) => {
    res.status(200).json({ message: 'OK' });
  }
);

module.exports = router;
