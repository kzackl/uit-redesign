import React from "react"
import Fade from "react-reveal/Fade"

import "../styles/hero4.scss"

const hero3 = () => (
  <section className="hero4">
    <div className="hero4--wrapper">
      <Fade up cascade duration={300}>
        <div className="quote">
          “ the graduate students from our university are able to fulfill a
          shortage of experts and professionals not only in Myanmar IT industry
          but also in the International ”
        </div>
        <div className="quoter">Dr. Saw Sanda Aye, Rector</div>
      </Fade>
    </div>
  </section>
)

export default hero3
