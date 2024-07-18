import React, { useState, useEffect } from 'react';
import styles from './index.module.css';



function IOSInstallInstructions() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.navigator.standalone;

  if (!isIOS || isStandalone) return null;

  return (
    <div>
      <p>To install this app on your iPhone:</p>
      <ol>
        <li>Tap the Share button</li>
        <li>Scroll down and tap "Add to Home Screen"</li>
        <li>Tap "Add" in the top right corner</li>
      </ol>
    </div>
  );
}




function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);
  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <button onClick={handleInstallClick} style={{ display: deferredPrompt ? 'block' : 'none' }}>
      Install App
    </button>
  );
}

function PwaInstallButton() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  return (
    <div>
      {isIOS ? <IOSInstallInstructions /> : <InstallPWA />}
    </div>
  );
}

export default PwaInstallButton;
