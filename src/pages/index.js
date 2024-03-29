import React, { useContext } from "react"
import { Link } from "gatsby"

import { LangContext } from "../components/lang/LangContext"
import RedLayout from "../components/layout/RedLayout"
import { EnglishTitle, CymraegTitle } from "../components/layout/Header"
import Badge from "../images/badge.png"
import "../styles/landing.less"

export default () => {
  const { lang, setLang } = useContext(LangContext)
  const handleCyPress = () => setLang("cy")
  const handleEnPress = () => setLang("en")

  return (
    <RedLayout wrapperClass="landing">
      <img src={Badge} alt="" className="landing__badge" />
      <div className="landing__text">
        <h1 className="landing__title title">
          {lang === "en" ? <EnglishTitle /> : <CymraegTitle />}
        </h1>
        <p className="subtitle">
          {lang === "en"
            ? "Exhibition at St Fagans"
            : "Exhibition at St Fagans Cy"}
          <br />
          11.11.19 - 24.11.19
        </p>
      </div>
      <div className="landing__buttons buttons">
        <div className="buttons--lang">
          <button
            className={`button ${lang === "cy" ? "button--active" : ""}`}
            onClick={handleCyPress}
          >
            Cymraeg
          </button>
          <button
            className={`button ${lang === "en" ? "button--active" : ""}`}
            onClick={handleEnPress}
          >
            English
          </button>
        </div>
        <div className="buttons--enter">
          <Link to="/shirts" className="button">
            {lang === "en" ? "Enter" : "Enter CY"}
          </Link>
        </div>
      </div>
    </RedLayout>
  )
}
