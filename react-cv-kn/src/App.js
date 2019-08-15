import React from 'react'
import './App.css'
import _ from 'lodash'
import Data from './data/content.json'
import pic from './data/cvphoto.jpg'

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

const edu = _.chain(Data)
.map((key) => {
  return key.education
})
.sort().reverse().flatten().uniq().value()

const tech = _.chain(Data)
.map((key) => {
  return key.tech_skills
})
.sort().flatten().uniq().value()

const other = _.chain(Data)
.map((key) => {
  return key.other_skills
})
.sort().flatten().uniq().value()

const int = _.chain(Data)
.map((key) => {
  return key.interests
})
.sort().flatten().uniq().value()

const traits = _.chain(Data)
.map((key) => {
  return key.notable_traits
})
.sort().flatten().uniq().value()

function App() {
  return (
    <div className={"cv-app"}>
      <div className={"cv-content cv-row"}>
        <div className={"cv-personal-photo"}>
          <img src={pic} alt="Kacper Nowosielski"></img>
        </div>
        <div className={"cv-personal-information"}>
          <h1>Personal Information</h1>
          <div className={"personal-information-content"}>
            <span>{personal.fullname}</span>
            <span>{personal.position}</span>
            <span>{personal.location}</span>
            <span>{personal.phone}</span>
            <span>{personal.email}</span>
            <div className={"icons"}>
              <span><a href={personal.github}><svg width="40" height="40" viewBox="0 0 16 16" version="1.1"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></span>
              <span><a href={personal.linkedin}><svg width="40" height="40" viewBox="0 0 16 16"><g fillRule="nonzero"><path d="M3.733 13h-2.8V3.714h2.8V13zM14 13h-2.8V8.04c0-1.293-.463-1.936-1.38-1.936-.727 0-1.189.36-1.42 1.081V13H5.6s.037-8.357 0-9.286h2.21l.17 1.857h.059c.574-.928 1.491-1.558 2.75-1.558.956 0 1.73.265 2.32.93.595.666.891 1.559.891 2.813V13z"></path><ellipse cx="2.333" cy="1.393" rx="1.447" ry="1.393"></ellipse></g></svg></a></span>
            </div>
          </div>
        </div>
        <div className={"cv-languages"}>
          <h1>Languages</h1>
          <div className={"languages-content"}>
            {lang.map((l, k) => {
              return (
                <span key={k}>{l}</span>
              )
            })}
          </div>
        </div>
        <div className={"cv-experience"}>
          <h1>Work Experience</h1>
          <div className={"experience-content cv-row"}>
            {_.orderBy(exp).reverse().map((e, k) => {
              if (e !== undefined) {
                return (
                  <div key={k} className={"exp cv-col"}>
                    <span className={"label"}>{e.time}</span>
                    <h3>{e.company}</h3>
                    <h4>{e.title}</h4>
                    <span>{e.description}</span>
                  </div>
                )
              }
              else {
                return null
              }
            })}
          </div>
        </div>
        <div className={"cv-education"}>
          <h1>Education</h1>
          <div className={"education-content cv-row"}>
            {_.orderBy(edu).reverse().map((e, k) => {
              if (e !== undefined) {
                return (
                  <div key={k} className={"edu cv-col"}>
                    <span className={"label"}>{e.time}</span>
                    <h3>{e.school}</h3>
                    <span>{e.programme}</span>
                    <span>{e.graduated}</span>
                    {e.thesis !== undefined ? <a href={e.thesis}>Thesis: Benefits of utilising Agile Scrum Management in Web Development projects : A case study at Mirum Agency</a> : null}
                  </div>
                )
              }
              else {
                return null
              }
            })}
          </div>
        </div>
        <div className={"cv-techskills"}>
          <h1>Tech Skills</h1>
          <div className={"techskills-content"}>
            {tech.map((t, k) => {
              if (t !== undefined) {
                return (
                  <span key={k}>{t}{tech.length !== k + 2 ? ', ' : ''}</span>
                )
              }
              else {
                return null
              }
            })}
          </div>
        </div>
        <div className={"cv-otherskills"}>
          <h1>Other Skills</h1>
          <div className={"otherskills-content"}>
            {other.map((o, k) => {
              if (o !== undefined) {
                return (
                  <span key={k}>{o}{other.length !== k + 2 ? ', ' : ''}</span>
                )
              }
              else {
                return null
              }
            })}
          </div>
        </div>
        <div className={"cv-interests"}>
          <h1>Interests</h1>
          <div className={"interests-content"}>
            {int.map((i, k) => {
              if (i !== undefined) {
                return (
                  <span key={k}>{i}{int.length !== k + 2 ? ', ' : ''}</span>
                )
              }
              else {
                return null
              }
            })}
          </div>
        </div>
        <div className={"cv-notabletraits"}>
          <h1>Notable Traits</h1>
          <div className={"notabletraits-content"}>
            {traits.map((t, k) => {
              if (t !== undefined) {
                return (
                  <span key={k}>{t}{traits.length !== k + 2 ? ', ' : ''}</span>
                )
              }
              else {
                return null
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
