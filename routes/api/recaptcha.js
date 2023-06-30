const { validateToken } = require('../../controllers/external');

const router = require('express').Router();

router.route('/').post(validateToken);

module.exports = router;
