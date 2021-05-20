import * as React from "react"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

// markup
const ContentHTML = ({ content }) => (
  <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
)

export default ContentHTML
