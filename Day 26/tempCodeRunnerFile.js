// 404 handler (must come after all routes and middleware)
app.use((req, res) => {
  res.status(404).send('🚫 404 - Page Not Found');
});
