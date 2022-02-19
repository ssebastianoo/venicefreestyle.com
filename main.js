const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.redirect('https://www.youtube.com/channel/UCY8VRN7zA_otXCbU3UoQueg');
});

app.listen(2030);