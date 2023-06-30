const axios = require('axios');
require('dotenv').config();

module.exports = {
  validateToken: async function (req, res) {
    const { token } = req.body;

    try {
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
      );

      if (response.data.success) {
        res.send({
          recaptchaValidated: true,
        });
      } else {
        res.send({
          recaptchaValidated: false,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error validating reCAPTCHA');
    }
  },
};
