import React from "react";
import UnusedSpellList from "./components/UnusedSpellList";
import UsedSpellList from "./components/UsedSpellList";
import AddSpellForm from "./components/AddSpellForm";
import CharacterForm from "./components/CharacterForm";
import TurnCounter from "./components/TurnCounter";
import './styles.css'
import { UserForm } from "./components/UserForm";

class App extends React.Component {
    render() {
        return <div className="App">
            <UserForm />
            <h1>SRD Spell companion</h1>
            <CharacterForm />
            <TurnCounter />
            <UnusedSpellList />
            <AddSpellForm />
            <UsedSpellList />
        </div>
    }
}

export default App;