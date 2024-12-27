[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/7XLS1QLQ)

### LiveStock Tracker
LiveStock Tracker is a comprehensive livestock monitoring system designed to provide real-time tracking and management of animals. The system utilizes modern web technologies to offer seamless user interaction, real-time updates, and insightful analytics for effective livestock management.

### Features
# Dashboard Overview
A summary of total animals, active tracking, and those requiring attention, displayed with clear visual indicators.

# Real-Time Location Tracking
Tracks the live location of animals on an interactive map. Distance is calculated based on updated GPS coordinates using geolocation data. Movement is simulated within a predefined radius, with updates applied dynamically in real-time.

# Animal Profiles
Each animal is assigned a detailed profile, including: Name Tag Type (e.g., cattle, sheep, goat, pig) Breed Health status Notes or additional remarks

# Symbol Usage
Symbols represent different animal types and their health statuses: Cattle: Represented by a feather icon. Sheep: Represented by a bird icon. Goat: Represented by an alert icon. Pig: Represented by a piggy bank icon. Unknown Animals: Represented by a help circle icon. Health statuses are indicated visually: Green: Healthy and active. Yellow: Needs attention but not critical. Red: Requires immediate action due to a critical issue.

# Livestock Overview
A comprehensive list of all animals with: Unique tags Last updated timestamps Current health statuses

### Technologies Used
Frontend React with TypeScript for a robust and scalable user interface. Styling Tailwind CSS for a modern and responsive design. Real-Time Updates WebSocket or Firebase integration to enable real-time live tracking. Mapping Interactive mapping functionality powered by Leaflet.js. Distance Tracking Distances are updated using a geolocation function that adds small, randomized movements within a fixed radius of approximately 50 meters. Unique offsets ensure that movements are distinct for each animal to simulate real-world behavior.

### How to Run
Clone the repository:

:bash git clone https://github.com/shrads17/LiveStock-Tracker.git Navigate to the project directory:

:bash cd project

:Install dependencies:

:bash npm install

:Start the development server: bash npm run dev

:Open the application in your browser: http://localhost:5173
