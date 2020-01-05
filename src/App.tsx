import React from "react";
import UnusedSpellList from "./components/UnusedSpellList";
import UsedSpellList from "./components/UsedSpellList";
import AddSpellForm from "./components/AddSpellForm";

class App extends React.Component {
    render() {
        return <div>
            <h1>SRD Spell companion</h1>
            <AddSpellForm />
            <UnusedSpellList />
            <UsedSpellList />
        </div>
    }
}

export default App;