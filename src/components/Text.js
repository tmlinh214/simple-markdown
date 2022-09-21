import React from 'react'

function Text(props) {
  return (
    <div>
        <textarea id='editor' name='editor' value={props.content} onChange={props.handleChange} className='editor' />
        <h2>Simple React Markdown</h2>
        <h3>Developed by M.Linh Tran</h3>
        <p>default content from freeCodeCamp</p>
    </div>
    
  )
}

export default Text