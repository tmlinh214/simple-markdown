import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

function Preview(props) {
  return (
    <div id='preview' className='preview'>
        <ReactMarkdown children={props.content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} />
        
    </div>
  )
}

export default Preview