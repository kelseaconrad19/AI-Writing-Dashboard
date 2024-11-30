import React, { useState } from "react";

const InputField = ({ onSubmit }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefaut();
		if (inputValue.trim() === "") {
			alert("Please enter a topic or keyword.");
			return;
		}
		onSubmit(inputValue);
		setInputValue("");
	};

	return (
		<form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Enter a topic or keyword"
				style={{
					padding: "10px",
					fontSize: "16px",
					width: "300px",
					borderRadius: "5px",
					border: "1px solid #ccc",
				}}
			/>
			<button
				type="submit"
				style={{
					padding: "10px 20px",
					backgroundColor: "#007BFF",
					color: "white",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
				}}
			>
				Submit
			</button>
		</form>
	);
};

export default InputField;
