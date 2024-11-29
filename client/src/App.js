import React, { useEffect, useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

function App() {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	useEffect(() => {
		fetch("/")
			.then((response) => response.text())
			.then((data) => console.log(data))
			.catch((error) => console.error("Error connecting to backend:", error));
	}, []);

	return (
		<div className="App">
			<h1>AI Writing Dashboard</h1>
			<div
				style={{
					border: "1px solid #ddd",
					padding: "10px",
					minHeight: "200px",
				}}
			>
				<Editor
					editorState={editorState}
					onChange={setEditorState}
					placeholder="Start writing here..."
				/>
			</div>
		</div>
	);
}

export default App;
