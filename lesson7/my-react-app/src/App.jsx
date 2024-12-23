import './App.css'

const users = [
    { name: 'Tom', country: 'Singapore' },
    { name: 'Jerry', country: 'Malaysia' },
    { name: 'Sarah', country: 'Indonesia' }
];

function WelcomeMessageTitle() {
    return <p>Welcome messages</p>
}

function WelcomeMessagesList() {
    return  <ul>
     {
        users.map( user => <>
              {user.country == 'Singapore' && <li>Majulah Singapura, {user.name}!</li>}
              <WelcomeMessage key={user.name} name={user.name} country={user.country} />
            </>
        )
     }
    </ul>
}

function WelcomeMessage(user) {
  return <li>Welcome {user.name} from {user.country}</li>
}

function App() {
    return <>
    <WelcomeMessageTitle />
    <WelcomeMessagesList />
    </>
}

export default App