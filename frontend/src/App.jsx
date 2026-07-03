import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>Full Stack</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App




/* note:

CROS (cross origin request)
means if our server is run in another domain and our application in another. Basically all cannot have to make access that is done by cross.

It said that the origin should be match other wise no operation

step to recover cors error:

1. make the backend developer to make my frontend url to whitelist.

simple meaning of CORS

simply in home don't allow all only the specific person can go.. 

we have to be carefully add port while doing in productionby viewing server giving which port.


or 

we can use proxy to solve that problem because proxy make the server fell like we are requesting form the server itself.
for eg: 
if we write the route like '/api/login' and if we are using vite we can add server: {
    proxy: {
      "/api": "http://localhost:5000/",
    }, 
    in vite config file which make if we hit /api
    it automatically call the above url in this case the backend url is above url which make server to feel like we are requesting form server not from other hosting applications.

*/

/*
also some bad practice people use that they make the build of all react code using npm run build which make a dist file after that they move that file in backend and in backend main file they use middleware like app.use(express.static('dist'))
in the case we used express and other for other backend tools.

if we do this then if we want some changes in frontend than again we have to build the file and new dist create and move to backend folder and delete the previous one.So that is not a good thing to do in actual development.
*/