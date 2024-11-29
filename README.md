# AI-Writing-Dashboard

Welcome to the **AI Writing Dashboard**, a creative writing tool designed to inspire and assist writers by integrating AI-powered features like idea generation and text expansion. This project combines a clean, user-friendly interface with dynamic backend functionality to enhance the writing experience.

---

## **Project Overview**

The AI Writing Dashboard is a full-stack application designed for writers and creatives who want to explore new ideas, overcome writer's block, and streamline their writing process. Users can draft text, receive AI-generated suggestions, and manage their drafts within an intuitive interface.

---

## **Features**

- **Rich Text Editor**: Draft, format, and edit content with ease.  
- **AI-Powered Writing Suggestions**: Leverages OpenAI's GPT API to provide idea prompts and text expansions.  
- **Draft Management**: Save and retrieve drafts for ongoing projects. *(Planned)*  
- **Responsive Design**: Optimized for desktop and mobile use.  

---

## **Technologies Used**

### **Frontend**  
- React.js  
- Draft.js / Quill.js (Rich Text Editor)  
- CSS/Bootstrap for responsive design  

### **Backend**  
- Flask / Node.js  
- OpenAI GPT API for AI features  
- PostgreSQL for data persistence *(Planned)*  

### **Hosting & Deployment**  
- Vercel (Frontend)  
- Render (Backend)  

---

## **Setup and Installation**

### Prerequisites
- Node.js and npm (for the frontend)
- Python 3.8+ (for the backend)
- PostgreSQL (optional for local database setup)

### Installation Steps

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/AI-Writing-Dashboard.git
   cd AI-Writing-Dashboard
   ```

2. **Frontend Setup**  
   ```bash
   cd client
   npm install
   npm start
   ```

3. **Backend Setup**  
   ```bash
   cd server
   pip install -r requirements.txt
   flask run
   ```

4. **Environment Variables**  
   Create a `.env` file in the server folder with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key
   ```

5. **Run the Application**  
   Open the frontend at `http://localhost:3000` and start exploring!

---

## **Planned Features**

- **User Authentication**: Secure login and draft management.  
- **Advanced AI Suggestions**: Sentence rewrites and tone adjustments.  
- **Export Options**: Save drafts as PDF or Word files.  
- **Multi-Draft Management**: Organize multiple projects seamlessly.  

---

## **Project Status**

This project is actively under development. Current focus includes:  
- Integrating OpenAI GPT API with the rich text editor.  
- Implementing basic draft management features.  

---

## **Live Demo**

*(Coming Soon)*  

---

## **Contributing**

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## **Author**

**Kelsea Conrad**  
[GitHub](https://github.com/kelseaconrad19) | [Portfolio](https://kelseaconrad.com) | [LinkedIn](https://www.linkedin.com/in/kelseaconrad1993)

---

## **Acknowledgements**

- [OpenAI GPT API](https://openai.com/)  
- [Draft.js](https://draftjs.org/) / [Quill.js](https://quilljs.com/) for the text editor  
- [Bootstrap](https://getbootstrap.com/) for design inspiration  
