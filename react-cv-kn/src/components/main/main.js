import React, { Component } from 'react'
import _ from 'lodash'
import Data from '../../data/content.json'

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

const cats = _.chain(Data)
.map((key) => {
  return key.categories
})
.sort().flatten().uniq().value()

class MainContent extends Component {
  constructor(props) {
    super()
    this.state = {
      toggled: false,
      contactBox: 'https://www.linkedin.com/in/knowosielski/'
    }
    
    this.escFunction = this.escFunction.bind(this)
    this.toggledButton = this.toggledButton.bind(this)
  }

  escFunction(event) {
    if (event.keyCode === 27 && this.state.toggled !== false) {
      this.setState({toggled: false})
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false)
  }

  toggledButton(content, key) {
    let toggledState = this.state
    toggledState.toggled = toggledState.toggled === key ? false : key
    this.setState(toggledState)
  }

  mainContent() {
    return (
      <div className={"cv"}>
        <div className={"cv-wrap-top"}>
          <div className={"cv-wrap-top-name"}>{personal.fullname}</div>
          <div className={"cv-wrap-top-pos"}>{personal.position}</div>
        </div>
        <div className={"cv-wrap-nav"}>
        {cats.map((c, k) => {
          if (c !== undefined) {
            return (
              <div className={"cv-wrap-nav-btn"} key={k} onClick={(e) => {this.toggledButton(c, k)}}>{c}</div>
            )
          }
          else {
            return null
          }
        })}
        </div>
      </div>
    )
  }

  contactInfo() {
    return (
      <div className={"cv-wrap-contact"}>
        <svg onClick={() => {this.setState({contactBox: personal.github})}} width="40" height="40" viewBox="0 0 16 16" version="1.1"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        <svg onClick={() => {this.setState({contactBox: personal.linkedin})}} width="40" height="40" viewBox="0 0 16 16"><g fillRule="nonzero"><path d="M3.733 13h-2.8V3.714h2.8V13zM14 13h-2.8V8.04c0-1.293-.463-1.936-1.38-1.936-.727 0-1.189.36-1.42 1.081V13H5.6s.037-8.357 0-9.286h2.21l.17 1.857h.059c.574-.928 1.491-1.558 2.75-1.558.956 0 1.73.265 2.32.93.595.666.891 1.559.891 2.813V13z"></path><ellipse cx="2.333" cy="1.393" rx="1.447" ry="1.393"></ellipse></g></svg>
        <svg onClick={() => {this.setState({contactBox: personal.email})}} width="40" height="40" viewBox="0 0 14 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
        <svg onClick={() => {this.setState({contactBox: personal.phone})}} width="40" height="40" viewBox="0 0 10 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z"></path></svg>
        <svg onClick={() => {this.setState({contactBox: personal.location})}} width="40" height="40" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
        {this.contactBoxWrap()}
      </div>
    )
  }

  contactBoxWrap() {
    if (this.state.contactBox !== '') {
      return (
      <div className={"cv-wrap-contact-box"}>
        <span className={"cv-wrap-contact-box-inner"}>
          {_.includes(this.state.contactBox, 'https://') === true ? <a href={this.state.contactBox}>{this.state.contactBox}</a> : <span>{this.state.contactBox}</span>}
        </span>
      </div>
      )
    }
    else {
      return null
    }
  }

  closeButton() {
    return (
      <svg onClick={() => {this.setState({toggled: false})}} width="40" height="40" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    )
  }

  printPopup() {
    // experience
    if (this.state.toggled === 0) {
      return (
        <div className={"cv-wrap-content"}>
          <div className={"cv-wrap-content-inner"}>
            <h1>_experience</h1>
            {this.closeButton()}
            <div className={"cv-wrap-content-inner-items"}>
              {_.orderBy(exp).reverse().map((e, k) => {
                if (e !== undefined) {
                  return (
                    <div key={k} className={"cv-wrap-content-inner-items-item"}>
                      <span>{e.time}</span>
                      <span>{e.company}</span>
                      <span>{e.title}</span>
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
        </div>
      )
    }
    // skills
    else if (this.state.toggled === 1) {
      return (
        <div className={"cv-wrap-content"}>
          <div className={"cv-wrap-content-inner"}>
            <h1>_tech_skills</h1>
            {this.closeButton()}
            <div className={"cv-wrap-content-inner-items-item skills"}>
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
            <h1>_other_skills</h1>
            <div className={"cv-wrap-content-inner-items-item skills"}>
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
            <h1>_languages</h1>
            <div className={"cv-wrap-content-inner-items-item lang"}>
              {lang.map((l, k) => {
                return (
                  <span key={k}>{l}</span>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
    // education
    else if (this.state.toggled === 2) {
      return (
        <div className={"cv-wrap-content"}>
          <div className={"cv-wrap-content-inner"}>
            <h1>_education</h1>
            {this.closeButton()}
            {_.orderBy(edu).reverse().map((e, k) => {
              if (e !== undefined) {
                return (
                  <div key={k} className={"cv-wrap-content-inner-items-item"}>
                    <span>{e.time}</span>
                    <span>{e.school}</span>
                    <span>{e.programme}</span>
                    {e.thesis !== undefined ? <a href={e.thesis}>Thesis: Benefits of utilising Agile Scrum Management in Web Development projects: A case study at Mirum Agency</a> : null}
                    <br></br>
                    <span>{e.graduated}</span>
                  </div>
                )
              }
              else {
                return null
              }
            })}
          </div>
        </div>
      )
    }
    // interests & traits
    else if (this.state.toggled === 3) {
      return (
        <div className={"cv-wrap-content"}>
          <div className={"cv-wrap-content-inner"}>
            <h1>_interests</h1>
            {this.closeButton()}
            <div className={"cv-wrap-content-inner-items-item skills"}>
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
            <h1>_notable_traits</h1>
            <div className={"cv-wrap-content-inner-items-item skills"}>
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
      )
    }
    else {
      return null
    }

  }

  render() {
    return (
      <div className={"cv-wrap"}>
        {this.mainContent()}
        {this.contactInfo()}
        {this.printPopup()}
      </div>
    )
  }

}

export default MainContent
