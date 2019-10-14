const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

//@route   GET /:code
//@Desc    Redirect to de long/original URL

router.get('/:code', async (req, res) => {
	try {
		let url = await Url.findOne({ urlCode: req.params.code });
		//console.log(req.params.code);
		if (url) {
			return res.redirect(url.longUrl);
		} else {
			return res.status(404).json('No Url found');
		}
	} catch (err) {
		console.error(err);
		res.status(500).json('Server Error');
	}
});

module.exports = router;
