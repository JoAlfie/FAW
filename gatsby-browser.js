import React from "react"
import "./src/styles/global.css"

import LangWrapper from "./src/components/common/LangWrapper"
export const wrapPageElement = ({ element, props }) => (
  <LangWrapper {...props}>{element}</LangWrapper>
)
