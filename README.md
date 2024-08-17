![image](https://github.com/user-attachments/assets/51fbde6a-b72a-49ac-91e7-b5717c9e7e07)
# WorldWise

WorldWise is a React.js application that provides city-related data and a map interface using Leaflet.js. The app is integrated with Firebase for deployment and includes various features like user authentication, Google OAuth, and a responsive design with a carousel and Context Api's

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Firebase Deployment](#firebase-deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

WorldWise is a city management application built with React and Leaflet.js for visualizing cities on a map. Users can log in, sign up, view city lists, and explore cities on an interactive map. The app includes additional features like tracking, adding notes, and managing dates.

## Features

- Interactive map using Leaflet.js.
- City and country management.
- User authentication with login and sign-up features.
- Integration with Google OAuth for Google Sign-In.
- Responsive design with a carousel feature.
- Separate sections for Pricing and Products.
- Users can track cities, add notes, and manage dates.
- Firebase Hosting deployment.    

## Images

Here are some screenshots of the project:


<img src="https://github.com/user-attachments/assets/aaad88e8-3cdc-4354-baa1-5b3631368bee" alt="HOmePage" width="400"/>
<img src="https://github.com/user-attachments/assets/84e789a9-ee81-49ab-a235-555ac692765f" alt="cityitem" width="400"/>
<img src="https://github.com/user-attachments/assets/f2674b42-d06f-4252-bbf8-dd41807ee97b" alt="FormPage" width="400"/>
<img src="https://github.com/user-attachments/assets/ea515fc3-1218-4adb-82aa-7f9739400e79" alt="SignupPage" width="400"/>





## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sakshi8707/worldwise-Project.git
    cd worldwise
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. 

## Usage

- **Start the app:** 

  After following the installation steps, you can run the app in development mode by using `npm run dev`. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **Login and Sign Up:**

  - Navigate to `/login` for logging in.
  - If you don't have an account, click on the "Sign Up" link to be redirected to the Sign-Up page.

- **Explore Cities:**

  - View the city list by navigating to `/app/cities`.
  - Explore cities on the interactive map using the map view.


## Technologies Used

- **React.js**: Frontend library for building the user interface.
- **Leaflet.js**: Library for interactive maps.
- **Firebase**: Hosting for deploying the application.
- **React Router**: For routing between different pages.
- **APIs**:
      Google Maps API: (Assuming you used this for map data)
      City and Country Data API: (Describe the specific API used to fetch city and country data)
      Authentication API: For handling user authentication.
  
- **CSS Modules**: For styling components.
- **Google OAuth**: For Google Sign-In integration.
- **Vite**: For fast development and building process
- **React Hooks**:

    useState: For managing local state in functional components.
    useEffect: For handling side effects in functional components.
    useNavigate: From React Router, used to programmatically navigate between routes.
    useContext: For accessing context values like authentication and city data.
    useCities: A custom hook created to manage and access city-related data.

- (in technologies add apis as well )

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.




