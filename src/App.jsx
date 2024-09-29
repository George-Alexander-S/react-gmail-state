import Header from './components/Header'
import initialEmails from './data/emails'
import { useEffect, useState } from 'react'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)

  const [originalEmails, setOriginalEmails] = useState(initialEmails);

  const [unreadOnly, setUnread] = useState(false);

  const [emails, setEmails] = useState(initialEmails)

  const toggleRead = (thisId) => {
    const readEmail = emails.map((email) => {
      if (email.id === thisId) {
        return {...email, read: !email.read}
      }
      return email
    })
    setEmails(readEmail)
  }

  const toggleStar = (thisId) => {
    const starrMail = emails.map((email) => {
      if (email.id === thisId) {
        return {...email, starred: !email.starred}
      }
      return email
    })
    setEmails(starrMail)
  }

  const hideRead = () => {
    setUnread(unreadOnly => !unreadOnly)
  }

  useEffect(() => {
    unreadEmail()
  }, [unreadOnly])

  const unreadEmail = () => {
    if (unreadOnly) {
      const unread = emails.filter(email => email.read === false)
      setEmails(unread)
    }
    else {
      setEmails(originalEmails)
    }
  }
  
  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              onChange={() => hideRead()}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{emails.map((email) => (
        <>
        <li className={`email ${email.read ? 'read' : 'unread'}`} key={email.id}>
        <div className="select">
          <input className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onChange={() => toggleRead(email.id)}
          />
        </div>
        <div className="star">
          <input className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={() => toggleStar(email.id)}
          />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
        </li>
        </>
      ))}
      </main>
    </div>
  )
}

export default App
