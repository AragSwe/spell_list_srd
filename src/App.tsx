import React from "react";
import UnusedSpellList from "./components/UnusedSpellList";
import UsedSpellList from "./components/UsedSpellList";
import AddSpellForm from "./components/AddSpellForm";
import CharacterForm from "./components/CharacterForm";
import TurnCounter from "./components/TurnCounter";

class App extends React.Component {
    render() {
        return <div>
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