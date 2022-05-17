import React from "react";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Link to="/auto-batching">Auto Batching</Link>
			<Link to="/suspense-sample">Suspense</Link>
		</div>
	);
}

export default App;
