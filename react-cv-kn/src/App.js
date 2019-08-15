import React from 'react'
import './App.css'
import _ from 'lodash'
import Data from './data/content.json'

const personal = _.chain(Data)
.map((key) => {
  return key.personal_info
})
.sort().flatten().uniq().head().value()

const lang = _.chain(Data)
.map((key) => {
  return key.languages
})
.sort().flatten().uniq().value()

const exp = _.chain(Data)
.map((key) => {
  return key.experience
})
.sort().reverse().flatten().uniq().value()

function App() {
  return (
    <div className={"cv-app"}>
      <header className={"cv-header"}>
        <span>CV</span>
      </header>
      <div className={"cv-content"}>
        <div className={"cv-personalinformation"}>
          <span>{personal.fullname}</span>
          <span>{personal.position}</span>
          <span>{personal.phone}</span>
          <span>{personal.email}</span>
          <span>{personal.github}</span>
          <span>{personal.linkedin}</span>
        </div>
        <div className={"cv-languages"}>
          {lang.map((l, k) => {
            return (
              <span key={k}>{l}</span>
            )
          })}
        </div>
        <div className={"cv-experience"}>
          {_.orderBy(exp).reverse().map((e, k) => {
            if (e !== undefined) {
              return (
                <div key={k} className={"exp"}>
                  <span>{e.time}</span>
                  <span>{e.company}</span>
                  <span>{e.title}</span>
                  <span>{e.description}</span>
                </div>
              )
            }

          })}
        </div>
        <div className={"cv-education"}>

        </div>
        <div className={"cv-techskills"}>

        </div>
        <div className={"cv-otherskills"}>
          
        </div>
        <div className={"cv-interests"}>

        </div>
        <div className={"cv-notabletraits"}>

        </div>
      </div>
    </div>
  )
}

export default App
