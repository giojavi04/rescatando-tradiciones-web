import * as React from "react"

// markup
const ContentHTML = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export default ContentHTML
