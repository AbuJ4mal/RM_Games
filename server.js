const express = require('express');

const { exec } = require('child_process');

const app = express();

app.get('/', (req, res) => {

  exec('node index.js', (err, stdout, stderr) => {

    if (err) {

      console.error(err);

      return;

    }

    console.log(stdout);

  });

  res.send('Express Server Running !');

});

app.listen(2023, () => console.log('Started Express Server !'));
