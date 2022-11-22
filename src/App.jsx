import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  const classesPHB = ["", "Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]
  const gendersPHB = {
    "": "",
    "male": "public/male_FILL0_wght400_GRAD0_opsz48.svg",
    "female": "public/female_FILL0_wght400_GRAD0_opsz48.svg"
  }
  const racesPHB = [
    { raceName: "", raceImg: "" },
    { raceName: "Dragonborn", raceImg: "https://5e.tools/img/races/PHB/Dragonborn.png" },
    { raceName: "Dwarf", raceImg: "https://5e.tools/img/races/PHB/Dwarf.png" },
    { raceName: "Elf", raceImg: "https://5e.tools/img/races/PHB/Elf.png" },
    { raceName: "Gnome", raceImg: "https://5e.tools/img/races/PHB/Gnome.png" },
    { raceName: "Half-Elf", raceImg: "https://5e.tools/img/races/PHB/Half-Elf.png" },
    { raceName: "Halfling", raceImg: "https://5e.tools/img/races/PHB/Halfling.png" },
    { raceName: "Human", raceImg: "https://5e.tools/img/races/PHB/Human.png" },
    { raceName: "Tiefling", raceImg: "https://5e.tools/img/races/PHB/Tiefling.png" }
  ]

  const [nameInput, setNameInput] = useState("")
  const [backstoryInput, setBackstoryInput] = useState("")

  const [selectedClass, setSelectedClass] = useState("")
  const [selectedRace, setSelectedRace] = useState("")
  const [selectedGender, setSelectedGender] = useState("")


  return (
    <div className="App">

      <div id="Title-section">
        <img src="public/Dungeons-and-Dragons-Logo_PNG1.png" alt="D 'n' D logo" />
      </div>

      <div id="Character-section">
        <div id="Form">
          <h1>Caracter Creator</h1>

          <label htmlFor="name">Enter character's Name</label>
          <input
            id="Name-input"
            name="name"
            type="text"
            maxLength="30"
            placeholder="maximum 30 characters"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
          />

          <label htmlFor="class">Select character's class</label>
          <select
            id="Class-select"
            name="class"
            onChange={(event) => setSelectedClass(event.target.value)}
          >
            {classesPHB.map((item, index) => <option value={item} key={index} >{item}</option>)}
          </select>

          <label htmlFor="race">Select character's race</label>
          <select
            id="Race-select"
            name="race"
            onChange={(event) => setSelectedRace(event.target.value)}
          >
            {racesPHB.map((race, index) => <option value={race.raceName} key={index} >{race.raceName}</option>)}
            <option value="Select race"></option>
          </select>

          <label htmlFor="gender">Select character's gender</label>
          <select
            id="Gender-select"
            name="gender"
            onChange={(event) => setSelectedGender(event.target.value)}
          >
            {Object.keys(gendersPHB).map((item, index) => <option value={item} key={index} >{item}</option>)}
          </select>

          <label htmlFor="Backstory">Enter character's story</label>
          <textarea
            id="Backstory-input"
            name="Backstory"
            type="textarea"
            maxLength="200"
            placeholder="maximum 200 characters"
            value={backstoryInput}
            onChange={(event) => setBackstoryInput(event.target.value)}
          />

          <img src="public/Dungeons-and-Dragons-Logo_PNG2.png" alt="D 'n' D logo" />
        </div> // From

        <div id="Sheet">
          <h1> {nameInput} </h1>
          <div id="Character-details">
            <p> {selectedClass} </p>
            <p> {selectedRace} </p>
            <p> {selectedGender} </p>
            <img
              src={selectedGender && ((Object.entries(gendersPHB).filter(index => index[0] === selectedGender))[0][1])}
              alt={selectedGender} />
            <p> {backstoryInput} </p>
          </div>
          <div
            id="Character-picture"
            style={{ backgroundImage: 'URL("' + racesPHB.filter(race => race.raceName === selectedRace)[0].raceImg + '")' }}
          >
          </div>
        </div> // Sheet
      </div> // Caracter-section

    </div > // App
  )
}

export default App
