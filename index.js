const express = require("express");

const app = express();

//PORT
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
