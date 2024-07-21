const express = require('express');
const bodyParser = require('body-parser');
const { initializeApp, auth } = require('firebase-admin');
const Web3JS = require('web3');

// Create a new Express application
const app = express();
app.use(bodyParser.json());

// Define the endpoint for creating custom tokens
app.post('/createCustomToken', async (req, res) => {
  const { address, signature } = req.body;

  if (!address || !signature) {
    return res.status(400).send({ error: 'Address and signature are required' });
  }

  const web3 = new Web3JS();
  const message = "Please sign this message to authenticate.";
  let recoveredAddress;

  try {
    recoveredAddress = web3.eth.accounts.recover(message, signature);
  } catch (error) {
    return res.status(400).send({ error: 'Invalid signature format' });
  }

  if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
    return res.status(400).send({ error: 'Invalid signature' });
  }

  try {
    const token = await auth().createCustomToken(address);
    return res.status(200).send({ token });
  } catch (error) {
    return res.status(500).send({ error: 'Error creating custom token' });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
