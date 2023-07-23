# Parenting Assist

## Table of Contents
1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Key Features](#key-features)
4. [Getting Started](#getting-started)
5. [API Endpoints](#api-endpoints)
6. [Schema Design](#schema-design)
7. [Glimpse of Website](#glimpse-of-website)

## Introduction
Parenting Assist is an AI-powered chat application that empowers parents to raise their children effectively. The application utilizes the power of AI to provide intelligent responses based on the questions asked by parents. By offering valuable insights and guidance, Parenting Assist aims to support parents in their parenting journey, making it easier and more fulfilling.

## Tech Stack
The Parenting Assist application is built using the following technologies:

Frontend:
- Angular
- TypeScript
- CSS

Backend:
- Flask
- MongoDB
- OpenAI

## Key Features
- AI-powered chat functionality for real-time assistance and guidance.
- User-friendly interface to facilitate easy communication with the AI chatbot.
- Secure user authentication and registration process.
- Seamless integration of OpenAI to provide intelligent responses to parenting queries.
- Backend built with Flask and MongoDB for robust data handling and storage.

## Getting Started
To get started with the Parenting Assist Application, follow the steps below.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/git-rishab/parent-guide.git
  
2. Install Dependencies:

   ```bash
   python -m venv venv
  
3. Run backend server:

   ```bash
   pip install -r requirements.txt

4. Start Frontend

   ```bash
   npm run start

## API Endpoints
Parenting Assist exposes the following API endpoints:

- `GET /upload`: Upload data.
- `GET /train`: Train the model.
- `GET /list`: List trained models.
- `GET /detail`: Get details of a specific trained model.
- `POST /test`: Test the model with a given prompt in the request body.
- `POST /audio`: Handle audio input for the chatbot.
- `POST /login`: User login with email and password in the request body.
- `POST /register`: User registration with name, email, and password in the request body.
- `POST /chat`: AI-powered chat with the prompt provided in the request body.


## Schema Design
Below is the Schema Design of the Application
![Screenshot (649)](https://github.com/git-rishab/parent-guide/assets/114337213/ea54f855-0c16-42fa-b7e3-877468efdd18)

## Glimpse of Website
- Landing Interface
![Screenshot (650)](https://github.com/git-rishab/parent-guide/assets/114337213/ea20cd44-ad0e-4f9c-9449-e60ab0d87efb)
- Login Interface
![Screenshot (651)](https://github.com/git-rishab/parent-guide/assets/114337213/a06dc4ef-677d-4e75-9c9c-9dc8d89a224c)
- Register Interface
![Screenshot (![Screenshot (653)](https://github.com/git-rishab/parent-guide/assets/114337213/27d737fd-cc21-459c-a7ea-22296270af8a)
652)](https://github.com/git-rishab/parent-guide/assets/114337213/47ed4169-2e27-40a7-a6c3-3e98f7a89dfa)
- Chat Interface
![Screenshot (653)](https://github.com/git-rishab/parent-guide/assets/114337213/e3164c39-41e6-4b15-bae2-4dcbbfb04188)

