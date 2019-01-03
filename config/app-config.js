(function(appConfig) {
  const bodyParser = require('body-parser');

  appConfig.init = function(app) {
    const env = app.get('env');
    console.log("setting app handler config: ", env);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  };

})(module.exports);
