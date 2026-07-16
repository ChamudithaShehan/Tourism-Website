# Ceylon Escapes (formerly Voyage Lumina)

Welcome to **Ceylon Escapes**, a premium travel and tourism platform dedicated exclusively to the breathtaking island of Sri Lanka. 

This project was built to showcase high-end travel itineraries, authentic local experiences, and the unparalleled beauty of the Pearl of the Indian Ocean—from the golden surfing bays of the South Coast to the misty peaks of the Hill Country.

## Features

- **Premium Design Aesthetics**: Minimalist, high-contrast UI with a luxurious feel (Alabaster whites, deep charcoals, and champagne golds).
- **Dynamic Routing**: Powered by TanStack Router for seamless transitions between destinations, custom packages, and travel stories.
- **Dedicated Package Details**: Individual itinerary pages loaded dynamically, featuring pricing in LKR, key inclusions, and rich photography.
- **Interactive Sri Lanka Map**: A custom-built SVG map of the teardrop island highlighting key regions and featured destinations like Yala, Galle, Ella, and Kandy.
- **Curated Masonry Gallery**: A dynamic image gallery featuring beautiful Sri Lankan landscapes, architecture, and wildlife.

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: TanStack Router (file-based routing)
- **Styling**: Tailwind CSS & Vanilla CSS Variables
- **Icons**: Lucide React
- **Typography**: Custom fonts configured for a premium editorial look

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd voyage-lumina-main
   ```

2. Install dependencies (we recommend `npm` or `bun`):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to view the site.

## Project Structure

- `src/components/site/Sections.tsx`: Core components for the homepage and repeated layouts (Hero, Map, Testimonials, Gallery).
- `src/routes/`: TanStack Router file-based route definitions (`destinations.tsx`, `packages.tsx`, etc.).
- `src/routes/packages.$packageId.tsx`: The dynamic detail page for individual packages.
- `src/data/packages.ts`: Shared data module storing all itinerary details, pricing (LKR), and highlights.
- `src/styles.css`: Core CSS file containing the curated color palette and layout utilities.

## Customization

To modify the color theme, navigate to `src/styles.css` and adjust the root CSS variables (e.g., `--background`, `--foreground`, `--gold`, `--ocean`).

To update or add new packages, edit the `packages` array inside `src/data/packages.ts`. The site will automatically generate new dynamic pages for any new entries added here.

## Acknowledgements

Crafted with care in Colombo.
