const express = require('express');
const path = require('path');
const app = express();

// Statik fayllarni berish (img, css, index.html)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Portfolio running on http://localhost:${PORT}`);
});
