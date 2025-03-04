# Right to Repair Educational Website

This repository contains the source code for an educational website about the Right to Repair movement. This project was created for CS3043: Social Implications of Information Processing at Worcester Polytechnic Institute (WPI) during C-term 2025, taught by Professor Andrews.

## Project Overview

The Right to Repair website serves as an educational resource to inform visitors about the Right to Repair movement, its history, current legislation, and available resources. The website features:

- Interactive timeline of key events in the Right to Repair movement
- Interactive map showing the current status of Right to Repair legislation across the United States
- Educational resources and links to organizations involved in the movement
- Information about the project team

## Technology Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Data Visualization**: Interactive SVG map and timeline
- **Data Parsing**: PapaParse for CSV handling

## Features

### Timeline
The interactive timeline showcases key events in the Right to Repair movement from 1910 to 2025, allowing users to explore the history and development of the movement through significant legislative, legal, and industry milestones.

### Legislation Map
The USA map visualization shows the current status of Right to Repair legislation across all 50 states, with information about:
- Active legislation in 2025
- Laws that have been passed
- States with both passed laws and currently active legislation

### Resources
Curated collection of links to organizations, policy resources, educational materials, and news sources related to the Right to Repair movement.

## Project Structure

```
website/
├── src/
│   ├── app/               # Next.js app router pages
│   ├── components/        # React components
│   ├── lib/               # Data and utilities
│   └── globals.css        # Global styles
```

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/jake-molnia/cs3043-project.git
```

2. Install dependencies:
```bash
cd cs3043-project
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Deployment

The website is configured for static export with Next.js, making it suitable for deployment on GitHub Pages or other static hosting services.

To build the project for production:
```bash
npm run build
```

## Contributors

This project is a collaborative effort between:

- **Jacob Molnia** - Math and Computer Science major
- **Kamala Greenwood** - Bioinformatics and Computer Science major

## Acknowledgments

- Professor Andrews for guidance and instruction in CS3043
- The organizations fighting for Right to Repair for their valuable resources and information
- The entire Right to Repair movement for inspiring this educational project

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.