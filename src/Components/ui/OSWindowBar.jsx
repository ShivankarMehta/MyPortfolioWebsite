import React from 'react'

const OSWindowBar = ({ path, status, module }) => (
  <div className="os-windowbar" aria-hidden="true">
    <div className="os-windowbar__controls">
      <i />
      <i />
      <i />
    </div>
    {module && <b className="os-windowbar__module">{module}</b>}
    <code>{path}</code>
    <span><i /> {status}</span>
  </div>
)

export default OSWindowBar
