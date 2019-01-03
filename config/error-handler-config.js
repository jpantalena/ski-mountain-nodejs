function errorLogger (err, req, res, next) {
  console.log("Check here for the error:");
  console.error(err.stack);
  next(err)
}

function clientError (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send("Woahhhh there, that's a client error")
  } else {
    next(err)
  }
}

function errorHandler (err, req, res, next) {
  res.status(500).send("Woahhhh there, Ski patrol is on the way")
}

module.exports = {
  logErrors: errorLogger,
  clientErrorHandler: clientError,
  errorHandler
};
