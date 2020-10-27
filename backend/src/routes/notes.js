const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('Notes route'));

module.exports = router;