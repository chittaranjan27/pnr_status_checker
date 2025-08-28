# PNR Status Checker

A React application to check the PNR status for Indian Railways tickets.

Live:- https://pnr-status-checker-sandy.vercel.app/

## Features

- Enter your 10-digit PNR number to view ticket status.
- Displays journey details, passenger information, and chart status.
- Shows sample PNRs for demo/testing.
- Modern UI with instant feedback and error handling.

## Getting Started

### Installation

1. Clone the repository: 
  
git clone https://github.com/chittaranjan27/pnr_status_checker

2. Navigate to the project directory:

cd pnr_status_checker

3. Install dependencies:

npm install

### Running the App

Start the development server:

Open (http://localhost:{port}) in your browser.

## Usage

- Enter a valid 10-digit PNR number in the input box.
- Click "Check Status" to view details.
- Try sample PNRs for demo data.

## Project Structure

See the [src](src) folder for main source code:

- [`src/App.jsx`](src/App.jsx): Main app component.
- [`src/components/InputForm.jsx`](src/components/InputForm.jsx): PNR input form.
- [`src/components/PassengerList.jsx`](src/components/PassengerList.jsx): Displays journey and passenger details.
- [`src/components/ErrorMessage.jsx`](src/components/ErrorMessage.jsx): Error display.
- [`src/components/Loader.jsx`](src/components/Loader.jsx): Loading spinner.
- [`src/api/pnrApi.js`](src/api/pnrApi.js): Mock API for PNR status.
