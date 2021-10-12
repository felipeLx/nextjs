function proxy(app) {
  app.get(/^\/$/, (req, res) => res.redirect('/products'))

  // it's only necessary for the "test:e2e" script
  app.head(/^\/products$/, (req, res) => res.status(200).end())
}

module.exports = proxy
