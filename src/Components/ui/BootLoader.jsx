import React from 'react'

const bootMessages = [
  'warming up the coffee cache...',
  'politely asking bugs to wait outside...',
  'negotiating a stable handshake with localhost...',
  'mounting projects, stories, and serious code...'
]

const BootLoader = () => (
  <div className="site-boot" role="status" aria-label="Booting Shivankar Mehta portfolio">
    <div className="site-boot__terminal">
      <div className="site-boot__bar">
        <span><i aria-hidden="true" /> PORTFOLIO.SHIVANKAR</span>
        <small>BOOT_SEQUENCE</small>
      </div>
      <p className="site-boot__command">
        <strong>shivankar@systems:~$</strong> boot --portfolio --fun
      </p>
      <div className="site-boot__messages" aria-hidden="true">
        {bootMessages.map((message, index) => (
          <p key={message}>
            <small>{String(index + 1).padStart(2, '0')}</small>
            {message}
          </p>
        ))}
      </div>
      <div className="site-boot__progress" aria-hidden="true">
        <span />
      </div>
      <p className="site-boot__ready">
        <i aria-hidden="true" />
        BOOTING SYSTEMS // portfolio opening shortly
      </p>
    </div>
  </div>
)

export default BootLoader
