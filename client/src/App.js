import React, { useEffect, useState, useRef } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

function App() {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const [suggestion, setSuggestion] = useState("");
	const [loading, setLoading] = useState(false);

	const editorRef = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		// Extract plain text from Draft.js content state
		const prompt = editorState.getCurrentContent().getPlainText();

		try {
			const response = await fetch("http://127.0.0.1:5000/api/suggest", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ prompt }),
			});

			const data = await response.json();
			setSuggestion(data.suggestion || "No suggestion received.");
		} catch (error) {
			console.error("Error fetching suggestion:", error);
			setSuggestion("Error fetching suggestion.");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetch("/")
			.then((response) => response.text())
			.then((data) => console.log(data))
			.catch((error) => console.error("Error connecting to backend:", error));
	}, []);

	return (
		<div className="App" style={{ padding: "20px" }}>
			<h1>AI Writing Dashboard</h1>
			<form onSubmit={handleSubmit}>
				<div
					style={{
						border: "1px solid #ddd",
						padding: "10px",
						minHeight: "200px",
						marginBottom: "10px",
					}}
					onClick={() => editorRef.current.focus()}
				>
					<Editor
						ref={editorRef}
						editorState={editorState}
						onChange={setEditorState}
						placeholder="Enter your writing prompt here..."
					/>
				</div>
				<button type="submit" disabled={loading} style={{ marginTop: "10px" }}>
					{loading ? "Loading..." : "Get Suggestion"}
				</button>
			</form>
			{suggestion && (
				<div>
					<h2>Suggestion:</h2>
					<p>{suggestion}</p>
				</div>
			)}
		</div>
	);
}

export default App;
