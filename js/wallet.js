const connectWalletButton = document.getElementById('connectWalletButton');

connectWalletButton.addEventListener('click', async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      // Check if the wallet is already connected
      if (connectWalletButton.innerText === 'Connected') {
        // If it's connected, change the button text to 'Disconnect'
        connectWalletButton.innerText = 'Disconnect'; // Fixed assignment
      } else {
        // Request wallet connection if not connected
        const response = await window.solana.connect();
        console.log('Connected with public key:', response.publicKey.toString());

        // Change the button text to 'Connected' after a successful connection
        connectWalletButton.innerText = 'Connected';
      }
    } catch (error) {
      console.error('User denied the connection', error);
    }
  } else {
    alert('Please install Phantom Wallet to connect!');
  }
});
