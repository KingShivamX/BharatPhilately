const getVerifcationEmailHTMLTemplate = require('./getVerifcationEmailHTMLTemplate')
const getResetPasswordHtmlTemplate = require('./resetPasswordhtml')

module.exports = {
  verifyEmail: getVerifcationEmailHTMLTemplate,
  resetPassword: getResetPasswordHtmlTemplate,
};
