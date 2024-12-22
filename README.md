# Sentiment Analysis Project

## Overview

This project provides a simple web-based interface for uploading a CSV file, analyzing sentiment, and visualizing the sentiment distribution through a bar chart. The application uses a backend API to perform sentiment analysis on the uploaded data and returns the results, which are displayed in a chart on the frontend. The project demonstrates how to integrate machine learning sentiment analysis with a frontend user interface.

## Files

- **App.jsx**: Contains the React component responsible for handling file upload, form submission, and rendering the sentiment chart.
- **backend.py**: The backend code that performs sentiment analysis on uploaded CSV files. The backend uses a Python-based API with FastAPI to handle file uploads and sentiment analysis.
- **index.html**: The HTML page used for the frontend, containing the form and chart components.

### API Documentation

### API Overview

- **API Name**: FastAPI, TextBlob
- **Purpose**: 
  - **FastAPI**: FastAPI is used to build the backend API for handling requests related to sentiment analysis. It is a modern, high-performance web framework that allows for fast and efficient API development.
  - **TextBlob**: TextBlob is used for performing sentiment analysis on the text data. It provides an easy-to-use interface for classifying text sentiment as positive, neutral, or negative.

### Why These APIs?

- **FastAPI**: We chose FastAPI for its high performance, simplicity, and automatic generation of API documentation (Swagger UI). FastAPI allows asynchronous requests, ensuring that the application can handle multiple requests concurrently without performance degradation.
- **TextBlob**: We chose **TextBlob** for sentiment analysis due to its simplicity, ease of integration, and efficiency in handling basic sentiment classification tasks. Given the limited time and resources available, TextBlob provided a quick solution without the need for complex model training or infrastructure setup. It is memory-efficient and fast, making it ideal for small to medium-scale projects. While more advanced models like BERT or RoBERTa may offer higher accuracy, they require significantly more computational resources and time for fine-tuning, which was not feasible for this project within the given constraints.

The FastAPI backend has been deployed on [Render](https://sentiment-analysis-8-wknc.onrender.com/), where the API can be accessed.
Note: The website frontend is still under development, a basic form is used in the video for demonstration purposes. But the API is deployed and can be tested via the FastAPI documentation or Postman.

## Testing the API Using Postman

You can test the FastAPI API using Postman by following these steps:

### 1. Launch Postman

If you don't have Postman installed, download and install it from [Postman Website](https://www.postman.com/downloads/).

### 2. Set Up Authorization

Before making requests, you'll need to authenticate using a bearer token. The token is provided after you log in successfully.

#### 2.1. Get the Access Token

- **URL**: `(https://sentiment-analysis-8-wknc.onrender.com/token)` (or the deployed URL if using Render)
- **Method**: POST
- **Body**: x-www-form-urlencoded
  - **Key**: `username`
  - **Value**: chinmay
  - **Key**: `password`
  - **Value**: password123
- **Headers**:
  - Content-Type: `application/x-www-form-urlencoded`
 
### Using FastAPI docs

You can check the endpoints using FastAPI's inbuild docs ( `https://sentiment-analysis-8-wknc.onrender.com/docs`)
  


## How to Run

### Prerequisites

1. **Backend Requirements**:
   - Python 3.x
   - FastAPI
   - Uvicorn
   - Pandas
   - TextBlob or any other sentiment analysis library

2. **Frontend Requirements**:
   - Node.js 
   - React.js
   - Axios
   - React-Chartjs-2 
  
You can install the dependencies using 
```bash
pip install -r requirements.txt
```

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


### Example CSV Format
The CSV file should contain a column with text data to be analyzed. An example of the CSV format:

```csv
text
"Good product, very satisfied!"
"This is okay, nothing special."
"Terrible experience, I will never buy this again."
```

### Future developments

Can modify the frontend and backend code to accept different file formats, handle additional user inputs, or adjust the sentiment analysis criteria. The current implementation uses a simple CSV file with text data and outputs sentiment results categorized as positive, neutral, and negative.
Addition functionality can be added which can show actual samples from the CSV file that the model identifies as positive, negative or neutral


 
