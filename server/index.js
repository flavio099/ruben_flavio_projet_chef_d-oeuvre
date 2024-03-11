const express = require('express');
const app = express();
const port = 3000
const router = require("./route/routes.js")
app.use(express.json())

app.use(router)



app.listen(port, () => {
   console.log(`serveur lancé sur le port ${port}`);
})

