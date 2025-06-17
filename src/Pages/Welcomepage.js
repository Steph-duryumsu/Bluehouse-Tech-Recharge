import React, { useState, useEffect } from 'react';

import cableIcon from '../Images/cable-icon.png';
import dataIcon from '../Images/data-icon.png';
import electricityIcon from '../Images/electricity-icon.png';
import eyeClosed from '../Images/eye-closed.png';
import eyeOpen from '../Images/eye-open.png';
import fundIcon from '../Images/fund-icon.png';
import '../Styles/Welcomepage.css';

export default function WelcomePage() {
  const [show, setShow] = useState(false);
  const [time, setTime] = useState('');

  const walletBalance = '12,345';
  const referralBonus = '1,234';

  const toggleShow = () => setShow(prev => !prev);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-container">
      {/* Header */}
      <div className="header">
        <div className="status-bar">
          <span className="time">{time}</span>
          <div className="status-icons">
            <span className="icon">📶</span>
            <span className="icon">📡</span>
            <span className="icon">🔋</span>
          </div>
        </div>
        <div className="header-text">Welcome</div>
      </div>

      {/* Balance Section */}
      <div className="balance-section">
        <div className="balance-row">
          <div className="balance-label">
            <img src={fundIcon} alt="Wallet" width="24" />
            <span>Wallet Balance</span>
          </div>
          <div className="balance-value-wrapper">
            <span className="balance-value">{show ? walletBalance : '••••••'}</span>
            <img
              src={show ? eyeOpen : eyeClosed}
              alt={show ? 'Hide balance' : 'Show balance'}
              width="24"
              className="eye-icon"
              onClick={toggleShow}
            />
          </div>
        </div>
        <div className="balance-row">
          <div className="balance-label">
            <img src={fundIcon} alt="Referral" width="24" />
            <span>Referral Bonus</span>
          </div>
          <span className="balance-value">{show ? referralBonus : '••••••'}</span>
        </div>
      </div>

      {/* Bank Info */}
      <div className="provider-grid">
        <div className="provider-card">
          <div className="bank-name">MONIEPOINT</div>
          <div className="bank-dashes">**********</div>
          <div className="bank-tag">Blue House</div>
        </div>
        <div className="provider-card">
          <div className="bank-name">WEMA BANK</div>
          <div className="bank-dashes">**********</div>
          <div className="bank-tag">Blue Tech</div>
        </div>
      </div>

      {/* Actions */}
      <div className="actions-grid">
        <div className="action-card">
          <img src={fundIcon} alt="Fund wallet" />
          <div>Fund Wallet</div>
        </div>
        <div className="action-card">
          <img src={dataIcon} alt="Buy data" />
          <div>Buy Data</div>
        </div>
        <div className="action-card">
          <img src={cableIcon} alt="Cable subscription" />
          <div>Subscribe to Cable</div>
        </div>
        <div className="action-card">
          <img src={electricityIcon} alt="Electricity bills" />
          <div>Electricity Bills</div>
        </div>
      </div>
    </div>
  );
}
