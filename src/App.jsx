import Header from './components/Header'
import initialEmails from './data/emails'
import { useState } from 'react'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)

  const [emails, setEmails] = useState(initialEmails);
  // const [read, setRead] = useState()
  
  // const toggleRead = () => {
  //   if(read === true) {
  //     setRead(false)
  //   }
  //   else if (read === false) {
  //     setRead(true)
  //   }
  // };

  // const readstatus = ['read', 'unread']

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
              checked={false}
              // onChange={() => {}}
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
          // onClick={toggleRead(email.read)}
          />
        </div>
        <div className="star">
          <input className="star-checkbox"
          type="checkbox"  checked={email.starred === true ? `isChecked` : ``}
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

// function ListEmails () {
//   return (
//     <ul>
//       {
//         initialEmails.map((email) => {
//           return <li key={email.id}>{email.title}</li>
//         })
//       }
//     </ul>
//   )
// }

export default App
