import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Caption from '../Caption';
import './Home.css';
import Button from '@mui/material/Button';
import Typewriter from "typewriter-effect";
function Home() {
  const [word, setWord] = useState('');
  const [captions, setCaptions] = useState([]);
  const [loading, setloading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your POST request with the word data
    // using fetch or any other HTTP library
    console.log(JSON.stringify({ word}))
    fetch('https://caption-bear-backend.vercel.app/generate-caption', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ word})
      
    },
    setloading(true))
      .then((response) =>{setloading(false)
        return response.json();})
      .then(data => {
        
        setCaptions(data);
        // captions=data;
        // data.map((cap) => {
        //     console.log(cap);
        // })
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <div>
      <div className="header">
      
      <form onSubmit={handleSubmit} className="form">
        <h2 id="title">Generate A.I Captions For</h2>
            <h1 className="typewriter">
              <Typewriter
                options={{
                  strings: [
                    "Facebook!",
                    "Instagram!",
                    "Youtube!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
      <TextField
          required
          id="outlined-required"
          label="Type Your Words"
          defaultValue="love"
          type="text"
          value={word}
          color='secondary'
           onChange={(event) => setWord(event.target.value)}
        />
        <Button type="submit" variant="contained">{loading ? 'Generating...' : 'Generate Caption'}</Button>
        {/* <input
          
         
        /> */}
        {/* <button  type="submit">{loading ? 'Generating...' : 'Generate Caption'}</button> */}
      </form>
      </div>
      <div className="caption-container">
      {captions.map((cap, index) => (
        <Caption key={cap[0]} text={cap} />
      ))}
      </div>

      
      
    </div>
  );
}

export default Home;