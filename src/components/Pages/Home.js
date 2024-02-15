import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Caption from '../Caption';
import './Home.css';
import Button from '@mui/material/Button';
import Typewriter from "typewriter-effect";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
function Home() {
  const [word, setWord] = useState('');
  const [captions, setCaptions] = useState([]);
  const [loading, setloading] = useState(false);
  const [tone, setTone] = useState('Casual');
  const [lang,setLang] = useState('english');

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
      body: JSON.stringify({word,lang,tone})
      
    },
    setloading(true))
      .then((response) =>{setloading(false)
        return response.json();})
      .then(data => {
        
        setCaptions(data);
        
      })
      .catch(error => {
       
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
      
        <input placeholder="Type Few Words About Your Post...💕" type="text" name="text"required
          className='input'
          defaultValue="love"
          value={word}
           onChange={(event) => setWord(event.target.value)} ></input>
           <div className="select">
            <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue={tone}
        value={tone}
        label="tone"
        color='secondary'
        onChange={(event) => setTone(event.target.value)}
        sx={{ m:0.5, minWidth: 50,borderRadius: 4 }} size="small"
      >
        
    
        <MenuItem value="Casual">Casual</MenuItem>
        <MenuItem value="Cheerful">Cheerful</MenuItem>
        <MenuItem value="Romantic">Romantic</MenuItem>
        <MenuItem value="Funny">Funny</MenuItem>
        <MenuItem value="Inspirational">Inspirational</MenuItem>
        <MenuItem value="Sad">Sad</MenuItem>
      </Select>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue={lang}
        value={lang}
        label="Language"
        color='secondary'
        onChange={(event) => setLang(event.target.value)}
        sx={{ m:0.5,  minWidth: 50,borderRadius: 4  }} size="small"
      >
        
    
        <MenuItem value="english"> English</MenuItem>
        <MenuItem value="hindi">Hindi</MenuItem>
        
      </Select>
</div>

        <Button type="submit" variant="contained">{loading ? 'Generating...' : 'Generate Caption'}</Button>
       
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