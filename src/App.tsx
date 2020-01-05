import React from "react";
import UnusedSpellList from "./components/UnusedSpellList";
import UsedSpellList from "./components/UsedSpellList";

class App extends React.Component {
    render() {
        return <div>
            <h1>SRD Spell companion</h1>
            <UnusedSpellList />
            <UsedSpellList />
        </div>
    }
}

export default App;