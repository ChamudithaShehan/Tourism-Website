

export type PackageData = {
  id: string;
  img: string;
  title: string;
  cat: string;
  duration: string;
  price: string;
  rating: number;
  blurb: string;
  highlights: string[];
};

export const packages: PackageData[] = [
  { id: "south-coast-retreat", img: "https://loremflickr.com/1920/1280/srilanka,beach/all", title: "South Coast Beach Retreat", cat: "Beach Holiday", duration: "7 nights", price: "LKR 850,000", rating: 4.9,
    blurb: "Private oceanfront villa, sunset surfing lessons, and candlelit seafood dinners on the sand.",
    highlights: ["Oceanfront villa", "Private chef", "Sunset cruise"] },
  { id: "yala-safari", img: "https://loremflickr.com/1920/1280/srilanka,elephant/all", title: "Yala Safari Wilderness", cat: "Wildlife Safari", duration: "5 nights", price: "LKR 650,000", rating: 4.9,
    blurb: "Track elusive leopards with a private guide, ending the day in a luxury tented camp under the stars.",
    highlights: ["Private tracker", "Jeep safari", "Luxury tented camp"] },
  { id: "cultural-triangle", img: "https://loremflickr.com/1920/1280/srilanka,ruins/all", title: "Cultural Triangle Journey", cat: "Culture", duration: "8 nights", price: "LKR 720,000", rating: 4.8,
    blurb: "Ancient ruins, sacred temples, and a serene boutique stay near the Sigiriya rock fortress.",
    highlights: ["Boutique stay", "Heritage guide", "Village tour"] },
  { id: "tea-country-train", img: "https://loremflickr.com/1920/1280/srilanka,tea/all", title: "Ella & Tea Country Train", cat: "Adventure", duration: "6 nights", price: "LKR 550,000", rating: 4.7,
    blurb: "Misty peaks, roaring waterfalls, and serene tea trails from a colonial-era planter's bungalow.",
    highlights: ["Scenic train ride", "Waterfall hike", "Tea factory tour"] },
  { id: "east-coast-sail", img: "https://loremflickr.com/1920/1280/srilanka,ocean/all", title: "East Coast Sail & Surf", cat: "Island Adventures", duration: "7 nights", price: "LKR 950,000", rating: 5.0,
    blurb: "Sail from Trincomalee to Arugam Bay aboard a chartered catamaran with a private crew.",
    highlights: ["Chartered catamaran", "Chef on board", "Surfing & snorkeling"] },
  { id: "hill-country-wellness", img: "https://loremflickr.com/1920/1280/srilanka,nature/all", title: "Hill Country Wellness Retreat", cat: "Luxury Escapes", duration: "5 nights", price: "LKR 600,000", rating: 4.9,
    blurb: "Sunrise yoga, Ayurvedic spa rituals, and organic garden dinners with a misty valley view.",
    highlights: ["Ayurvedic spa", "Daily yoga", "Organic dining"] },
];
