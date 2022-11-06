import React, { useState, useEffect } from "react"
import { quotes } from "../quotes"
import { COLORS_ARRAY } from "../colors"
import styles from './styles.css'




function App() {
  const [quote, setQuote] = useState('Ella le dijo, como acostumbrábamos decir llévame a ver las estrellas, llévame a decir sí, sí, sí, si')
  const [autor, setAutor] = useState('Guasones')
  const [currentColor, setCurrentColor] = useState('#F4433')

  const getRandomQuote = (quotes) => {
    let getRandomIndex = Math.floor(Math.random() * quotes.length)
    let getRandomQuote = quotes[getRandomIndex]
    setQuote(getRandomQuote.quote)
    setAutor(getRandomQuote.autor)

    let getRandomColor = COLORS_ARRAY[getRandomIndex]
    setCurrentColor(getRandomColor)
  }

  useEffect(() => {
    document.title = `${quotes.length} frases de Rock Nacional`
    document.body.style.backgroundColor = currentColor
  }, [quotes, currentColor])


  return (
    <>
      <div className="quote-box" id="quote-box">
        <div title="Cita" id="text" style={{ color: currentColor }}>
          <p className="quote-text">{quote}</p>
        </div>
        <div title="Autor de la frase" id="author" style={{ color: currentColor }}>
          <p className="quote-author">- {autor}</p>
        </div>
        <div className="buttons">
          <a id="tweet-quote" style={{ backgroundColor: currentColor }} title="Twitea tu frase!" className="button" rel="noreferrer" href={encodeURI(`https://twitter.com/intent/tweet?&text=${quote} - ${autor}`)} target="_blank">
            <img src="https://icongr.am/fontawesome/twitter.svg?size=23&color=ffffff" />
          </a>
          <button style={{ backgroundColor: currentColor }} className="button" title="Obtene una nueva frase" id="new-quote" onClick={() => getRandomQuote(quotes)}>New Quote</button>
        </div>
      </div>
    </>
  )
}

export default App
