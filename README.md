# Sentiment Analysis Project

## Overview

This project provides a simple web-based interface for uploading a CSV file, analyzing sentiment, and visualizing the sentiment distribution through a bar chart. The application uses a backend API to perform sentiment analysis on the uploaded data and returns the results, which are displayed in a chart on the frontend. The project demonstrates how to integrate machine learning sentiment analysis with a frontend user interface.

## Files

- **App.jsx**: Contains the React component responsible for handling file upload, form submission, and rendering the sentiment chart.
- **backend.py**: The backend code that performs sentiment analysis on uploaded CSV files. The backend uses a Python-based API with FastAPI to handle file uploads and sentiment analysis.
- **index.html**: The HTML page used for the frontend, containing the form and chart components.

## How to Run

### Prerequisites

1. **Backend Requirements**:
   - Python 3.x
   - FastAPI (install using `pip install fastapi`)
   - Uvicorn (install using `pip install uvicorn`)
   - Pandas (install using `pip install pandas`)
   - TextBlob or any other sentiment analysis library (install using `pip install textblob`)

2. **Frontend Requirements**:
   - Node.js (install from [nodejs.org](https://nodejs.org/))
   - React.js (install using `npx create-react-app sentiment-analysis-app`)
   - Axios (install using `npm install axios`)
   - React-Chartjs-2 (install using `npm install react-chartjs-2 chart.js`)

### Steps to Run

1. **Setting up the Backend**:
   - Clone or download the project files.
   - Navigate to the folder containing `backend.py`.
   - Run the backend API server with the following command:
     ```bash
     uvicorn backend:app --reload
     ```

2. **Setting up the Frontend**:
   - Navigate to the folder containing `App.jsx`.
   - Install required dependencies with:
     ```bash
     npm install
     ```
   - Start the frontend React server with:
     ```bash
     npm run dev
     ```

3. **Open the Application**:
   - Open a browser and go to `http://localhost:5173/` to use the frontend interface.

### Example Usage

1. Open the application in the browser.
2. Upload a CSV file containing text data for sentiment analysis.
3. Click on the "Analyze" button to process the file.
4. The sentiment distribution (positive, neutral, and negative sentiments) will be displayed in a bar chart.

### Custom Inputs

You can modify the frontend and backend code to accept different file formats, handle additional user inputs, or adjust the sentiment analysis criteria. The current implementation uses a simple CSV file with text data and outputs sentiment results categorized as positive, neutral, and negative.

### Example CSV Format

The CSV file should contain a column with text data to be analyzed. An example of the CSV format:

```csv
text
"Good product, very satisfied!"
"This is okay, nothing special."
"Terrible experience, I will never buy this again."
 
