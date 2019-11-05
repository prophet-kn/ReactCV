import React, { Component } from 'react'
import _ from 'lodash'
import Data from '../../data/content.json'
import cv from '../../data/CN_Kacper_Nowosielski.pdf'

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
        <svg onClick={() => {this.setState({contactBox: personal.dnd_app})}} width="40" height="40" viewBox="0 0 16 16" version="1.1"><path fillRule="evenodd" d="M-219.22,834.32c26.95-87,66.68-167.62,125.64-237.32C-68.3,567.12-38,541.51-10,514l13,8L-24.67,792.74l7.87,6.07c76-77.2,143.23-165.44,254.21-212-9.08,54.43-17.24,103.31-26.13,156.58,73-30.3,120.35-109.95,211-86.76-28.4,39.23-59.65,75.91-83.7,116.83-68.12,116-100.05,238.08-54.67,371.71,55.61,163.74,221.69,231,374,149.45,80.38-43,141.12-107.79,193.7-180.92,9.14-12.72,18-25.64,29.44-42,61.36,51.12,122,100.66,181,152.11,7.06,6.17,10.87,26.2,6.3,34C983.94,1403.1,889.16,1537.39,731,1614.68c-232.41,113.56-547.4,79.17-714.58-145.2-4.68-6.29-9.1-13.51-15.37-17.72-7.91-5.31-21.32-13.52-25.71-10.57-8.08,5.41-15.71,18.1-15.64,27.7.14,20.12,5.39,40.19,9.88,68.75-80.17-79.88-126.06-168.91-148.67-270.61-27.39-123.23-16.82-244.57,18.53-364.78,7.08-24.07,10.75-49.15,16-73.76l-14.15-10-60.47,47.37Z" transform="translate(219.22 568.04)"/><path d="M666.2,582.15c25,62.19,68,78.89,121.56,82.86,82,6.08,95.93,19.57,110.35,99,6.42,35.35,26.67,55.63,61.25,53.62,75.7-4.38,132.26,31.07,186.55,77.91,71.44,61.63,145.47,120.26,218.62,179.89,40.43,33,83.31,55.55,136.75,29.44,53.1-25.93,71.31-69.9,66.52-126.25-.16-1.86,2.14-3.94,3.3-5.92,95.45,63.28,107.38,196.32,27.71,307.24,106.8,45.69,251.73-46.13,246.12-156.28-3.17-62.35-44.66-97.61-91.6-130.78,95.07-4.49,176.78,27.53,240.22,99.12,73.49,82.93,92.14,177.51,45.29,280.73-52.7,116.12-169.73,178.84-324.4,175.24,27.76,40.41,103.31,61,213.18,55-98,92.91-209.09,127.64-332.26,110.36-157.58-22.11-234.29-129.74-264.54-277.85-56.41,40.46-63.45,127.53-14.78,221-16.9-7-29.11-10.24-39.28-16.66-70.14-44.37-110.48-106.81-111.56-191.32-.44-34.06.36-68.25,3-102.21,6.22-80.54-26.79-141.59-88.47-190.87-67.58-54-133.76-109.76-200.5-164.8-46.62-38.45-76-84.68-75.78-148.23.19-57.05-36.44-93.3-80.65-122.63C677.1,689.54,653.76,649.43,666.2,582.15Z" transform="translate(219.22 568.04)"/><path d="M184.56,149.17c-17.42-51.5-36.24-99.51-16-158,43,78.51,113,117.47,180.85,159.76,58.22,36.27,114.07,76.32,175.41,113.37-22.63-27.09-40.94-60.27-68.78-80-58.41-41.4-71.92-98.8-66.61-162.09,4.35-51.79,18.42-102.76,35.66-153.87,13.9,112.1,80.85,187,157.36,257.19C653.75,190.92,722.71,258.94,796,325c-9-14.46-15.95-30.84-27.36-43.06-57.2-61.28-114.06-123-174-181.6C536.37,43.27,523.6-28,566.08-103.92,584.05,9,657.29,82.54,733.31,155.85,789.75,210.28,846,266.57,891.86,329.66c25.93,35.66,30.16,86.9,45.22,130.76,5.33,15.52,12.94,30.44,21.06,44.76,9.41,16.61,20.53,32.25,33.57,52.41l59-44.71c21.13,70.6-32,188.4-109.18,233.27C938.19,704.18,940,657,892.79,641c-39.23-13.29-81.69-17-124.5-25.33,1.11-4.18,2.15-10.45,4.42-16.24,26.27-67.08,17.86-85-53.17-85.4-67.34-.42-134.75,8.91-202.13,14q-.21,7.14-.41,14.27l88.52,14.57c-7.25,23.26-14.41,44.8-20.67,66.61-13.42,46.71-3.33,61.63,43.56,65.52,1.34,99.63,1.34,99.63,58.42,100.37-14,51.85-100.34,104.11-174.78,105.74,17.33-21.5,34.77-43.13,59.13-73.37l-83.86,5.18c48.54-61.15,73.84-124.8,23.55-186.56C456,572.86,380.73,578.76,301.43,609.14c22.74-70.77,81.7-103.2,133.13-148.75l-87.47-26.94Q346,427.24,344.86,421l176.47-54.37c-84.48-24.4-242.11,24.39-292.65,95.65l73.38,16.82L53,625.39c3.35-19.51,7.32-40.24,10.43-61.1,12.2-81.78-25.22-124.92-108.32-125.16-24.52-.07-49,0-84.22,0,20.24-14.06,32.81-24,46.46-32.06,53-31.39,106.77-61.5,159.44-93.41,55.27-33.49,58.53-52.76,17.69-101-21-24.79-44-47.83-69.8-75.68Zm502,202.73C702.14,430,738.93,466.22,791,457.07,772.84,407.08,740.54,373.29,686.56,351.9Z" transform="translate(219.22 568.04)"/><path d="M875.57,190.76c-64.18-59.94-128.93-119-191.24-180.56-7.09-7-1.66-28.08,0-42.37,6.45-53.91,23.44-108.58,18.67-161.36-9.31-103-78.76-163.58-168.57-161.72-88.73,1.83-156.88,71.08-171.94,169.16C350.12-105.3,333-25.24,318,55.33,219.75,10.55,210.28-96.15,154.81-180.55l-69,240.87C73,13.81,54.94-29,50-73.25,16.88-371.16,246.15-555.48,481.2-566.87c102.16-5,201.93,4.52,294.13,53.24C943.64-424.69,1027.62-230.87,981.09-42.5,959.51,44.82,918.94,123,875.57,190.76Z" transform="translate(219.22 568.04)"/><path d="M1621.57,385c-179.19,2.54-322.31,87-457.84,212.51,49.15-125.83,121.9-219.29,225.09-290.83,1.72,4.8,3.56,7.24,3.15,9.21-3.76,18.11-7.91,36.14-11.94,54.19,18.32-5.93,39-8.26,54.57-18.43,68.66-44.88,127.1-106.28,210-127.85,2.25-.58,4.85.21,12.39.67-19.59,14.44-38.32,24.44-51.55,39.33-8.88,10-10,26.89-14.55,40.71,13,1.64,26.43,6.35,38.84,4.42,65.61-10.24,130.69-29.32,196.46-31.79,96.35-3.61,238.77,70.46,296.92,141.19-59.84,6.47-122.23,9.25-182.83,21.14-41.68,8.18-80.34,30.71-121.41,43.4-17.9,5.53-41.36,9.18-57.34,2.25-118.5-51.36-254.62-25.42-333.75,78.1-65,85-118.52,178.7-176.79,268.77-9.17,14.18-16.52,29.55-25.62,46L1074.82,765.63C1218.43,585.22,1382.66,432.82,1621.57,385Z" transform="translate(219.22 568.04)"/></svg>
        <svg onClick={() => {this.setState({contactBox: personal.github})}} width="40" height="40" viewBox="0 0 16 16" version="1.1"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        <svg onClick={() => {this.setState({contactBox: personal.linkedin})}} width="40" height="40" viewBox="0 0 16 16"><g fillRule="nonzero"><path d="M3.733 13h-2.8V3.714h2.8V13zM14 13h-2.8V8.04c0-1.293-.463-1.936-1.38-1.936-.727 0-1.189.36-1.42 1.081V13H5.6s.037-8.357 0-9.286h2.21l.17 1.857h.059c.574-.928 1.491-1.558 2.75-1.558.956 0 1.73.265 2.32.93.595.666.891 1.559.891 2.813V13z"></path><ellipse cx="2.333" cy="1.393" rx="1.447" ry="1.393"></ellipse></g></svg>
        <svg onClick={() => {this.setState({contactBox: personal.email})}} width="40" height="40" viewBox="0 0 14 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
        <svg onClick={() => {this.setState({contactBox: personal.phone})}} width="40" height="40" viewBox="0 0 10 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z"></path></svg>
        <svg onClick={() => {this.setState({contactBox: personal.location})}} width="40" height="40" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
        <svg onClick={() => {this.setState({contactBox: personal.static_cv})}}width="40" height="40" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M8.5 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L8.5 1zM1 2h4a.68.68 0 0 0-.31.2 1.08 1.08 0 0 0-.23.47 4.22 4.22 0 0 0-.09 1.47c.06.609.173 1.211.34 1.8A21.78 21.78 0 0 1 3.6 8.6c-.5 1-.8 1.66-.91 1.84a7.156 7.156 0 0 0-.69.3c-.362.165-.699.38-1 .64V2zm4.42 4.8a5.65 5.65 0 0 0 1.17 2.09c.275.237.595.417.94.53-.64.09-1.23.2-1.81.33-.618.15-1.223.347-1.81.59s.22-.44.61-1.25c.365-.74.67-1.51.91-2.3l-.01.01zM11 14H1.5a.743.743 0 0 1-.17 0 2.12 2.12 0 0 0 .73-.44 10.14 10.14 0 0 0 1.78-2.38c.31-.13.58-.23.81-.31l.42-.14c.45-.13.94-.23 1.44-.33s1-.16 1.48-.2c.447.216.912.394 1.39.53.403.11.814.188 1.23.23h.38V14H11zm0-4.86a3.743 3.743 0 0 0-.64-.28 4.221 4.221 0 0 0-.75-.11c-.411.003-.822.03-1.23.08a3 3 0 0 1-1-.64 6.07 6.07 0 0 1-1.29-2.33c.111-.661.178-1.33.2-2 .02-.25.02-.5 0-.75a1.05 1.05 0 0 0-.2-.88.82.82 0 0 0-.61-.23H8l3 3v4.14z"></path></svg>
        {this.contactBoxWrap()}
      </div>
    )
  }

  contactBoxWrap() {
  if (this.state.contactBox !== '' && this.state.contactBox !== 'Check CV in PDF') {
      return (
      <div className={"cv-wrap-contact-box"}>
        <span className={"cv-wrap-contact-box-inner"}>
          {_.includes(this.state.contactBox, 'https://') === true ? <a href={this.state.contactBox}>{this.state.contactBox}</a> : <span>{this.state.contactBox}</span>}
        </span>
      </div>
      )
    }
    else if (this.state.contactBox === 'Check CV in PDF') {
      return (
        <div className={"cv-wrap-contact-box"}>
          <span className={"cv-wrap-contact-box-inner"}>
            <a href={cv} target="_blank">{this.state.contactBox}</a>
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
