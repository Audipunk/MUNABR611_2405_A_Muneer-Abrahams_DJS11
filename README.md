# O-Casst - Podcast Discovery and Listening Platform

O-Casst is a modern, feature-rich web application for discovering, managing, and listening to podcasts. Built with React and leveraging the power of various libraries, O-Casst offers a seamless and engaging podcast experience.

## url

- https://podcast-api.netlify.app
## Features

- Browse and search through a wide range of podcasts
- Play podcast episodes directly in the app
- Mark favorites and manage a personal library
- Track listening history and resume playback
- Sort and filter podcasts by various criteria
- Responsive design for optimal viewing on all devices

## Dependencies

This project relies on the following main dependencies:

- React
- React Router Dom
- @radix-ui/themes
- @radix-ui/react-icons
- react-slick
- slick-carousel

For a complete list of dependencies, please refer to the `package.json` file.

## Setup and Installation

1. Ensure you have Node.js and npm installed on your system.

2. Clone the repository:
   ```
   git clone https://github.com/Audipunk/MUNABR611_2405_a_Muneer-Abrahams_DJS11
   ```

3. Navigate to the project directory:
   ```
   cd O-Casst
   ```

4. Install dependencies using npm:
   ```
   npm install
   ```

5. Start the development server:
   ```
   npm run dev
   ```

The application should now be running on `http://localhost:5173` (or another port if 5173 is occupied).

## API

O-Casst uses the following API endpoints:

- Base URL: 'https://podcast-api.netlify.app/'
- Shows list:'https://podcast-api.netlify.app/genre/<ID>'
- Show details: 'https://podcast-api.netlify.app/id/<ID>'


## Components

The application is built with the following main components:

- `Home`: Landing page with featured podcasts
- `ShowList`: Displays all available podcasts with sorting and filtering options
- `ShowDetails`: Detailed view of a specific podcast
- `Favorites`: User's favorite podcasts
- `CompletedEpisodes`: User's listening history
- `AudioPlayer`: Controls for playing podcast episodes

## Styling

The app uses a combination of custom CSS and Radix UI components for styling. The color scheme and layout can be customized in the `App.css` file.

## Contributing

Contributions to O-Casst are welcome! Please feel free to submit a Pull Request.

## Contact Information

👤 Name: Muneer Abrahams 
📧 Email: Audipunkwp@gmail.com 
🐙 GitHub: https://github.com/Audipunk

## License

This project is open source and available under the [MIT License](LICENSE).
