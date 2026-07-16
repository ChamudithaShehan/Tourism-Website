
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
  itinerary?: { day: string; title: string; desc: string }[];
  includes?: string[];
  excludes?: string[];
  location?: string;
};

export const packages: PackageData[] = [
  {
    id: "south-coast-retreat",
    img: "https://s29745.pcdn.co/wp-content/uploads/2019/04/Hikkaduwa-Beach-Sri-Lanka-.jpeg",
    title: "South Coast Beach Retreat",
    cat: "Beach Holiday",
    duration: "7 nights",
    price: "LKR 850,000",
    rating: 4.9,
    location: "Hikkaduwa · Mirissa · Weligama",
    blurb: "Private oceanfront villa, sunset surfing lessons, and candlelit seafood dinners on the sand.",
    highlights: ["Oceanfront villa", "Private chef", "Sunset cruise"],
    includes: ["Airport transfers", "All accommodation", "Daily breakfast & dinner", "Sunset catamaran cruise", "Surfing lesson", "Snorkeling excursion"],
    excludes: ["International flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: "Day 1", title: "Arrival & Sunset Welcome", desc: "Arrive in Colombo, transfer to your private beachfront villa. Enjoy a welcome dinner by the ocean as the sun sets over the Indian Ocean." },
      { day: "Day 2", title: "Hikkaduwa Reef & Snorkel", desc: "Morning snorkeling in the Hikkaduwa marine sanctuary. Afternoon leisure on the beach. Evening beach bonfire with fresh seafood." },
      { day: "Day 3", title: "Surf Lessons at Weligama", desc: "Private surf lesson at Weligama Bay with a certified instructor. Visit the Paravi Duwa temple island by boat." },
      { day: "Day 4", title: "Galle Fort Heritage Walk", desc: "Half-day guided tour of the UNESCO-listed Galle Fort. Explore boutique galleries and colonial architecture before returning for a spa afternoon." },
      { day: "Day 5", title: "Whale Watching at Mirissa", desc: "Early morning whale watching expedition — spot blue whales and spinner dolphins. Afternoon at leisure." },
      { day: "Day 6", title: "Cooking Class & Sunset Cruise", desc: "Learn to cook authentic Sri Lankan dishes with a local chef. Evening catamaran sunset cruise with champagne." },
      { day: "Day 7", title: "Leisurely Farewell Day", desc: "Final morning on the beach. Late checkout and transfer to Colombo or Bandaranaike International Airport." },
    ],
  },
  {
    id: "yala-safari",
    img: "https://www.srilankalocaltours.com/wp-content/uploads/safari-trip-to-Yala-National-Park-1.jpg",
    title: "Yala Safari Wilderness",
    cat: "Wildlife Safari",
    duration: "5 nights",
    price: "LKR 650,000",
    rating: 4.9,
    location: "Yala National Park · Udawalawe",
    blurb: "Track elusive leopards with a private guide, ending the day in a luxury tented camp under the stars.",
    highlights: ["Private tracker", "Jeep safari", "Luxury tented camp"],
    includes: ["Airport transfers", "Luxury tented camp accommodation", "All safari game drives", "Full board meals", "Expert naturalist guide", "Elephant watching at Udawalawe"],
    excludes: ["Park entrance fees", "International flights", "Alcoholic beverages"],
    itinerary: [
      { day: "Day 1", title: "Colombo to Yala", desc: "Private transfer from Colombo to Yala. Arrive at the luxury tented camp. Evening orientation briefing with your naturalist guide." },
      { day: "Day 2", title: "Dawn Safari — Leopard Territory", desc: "Pre-dawn jeep safari into Yala Block 1, home to the highest density of leopards in the world. Return for bush breakfast." },
      { day: "Day 3", title: "Full Day Deep Bush Safari", desc: "Full-day safari through multiple blocks. Picnic lunch in the bush. Spot crocodiles, elephants, peacocks and endemic birds." },
      { day: "Day 4", title: "Udawalawe Elephant Transit", desc: "Visit the Udawalawe Elephant Transit Home. Watch baby elephants at feeding time. Evening sundowner in the savannah." },
      { day: "Day 5", title: "Final Morning Safari & Departure", desc: "One final dawn drive before breakfast. Transfer to Colombo or continue to your next destination." },
    ],
  },
  {
    id: "cultural-triangle",
    img: "https://images.locationscout.net/2018/06/polonnaruwa-ruins-sri-lanka-ws3e.jpg?h=1100&q=83",
    title: "Cultural Triangle Journey",
    cat: "Culture",
    duration: "8 nights",
    price: "LKR 720,000",
    rating: 4.8,
    location: "Sigiriya · Polonnaruwa · Anuradhapura · Dambulla",
    blurb: "Ancient ruins, sacred temples, and a serene boutique stay near the Sigiriya rock fortress.",
    highlights: ["Boutique stay", "Heritage guide", "Village tour"],
    includes: ["All accommodation", "Airport transfers", "Breakfast daily", "Private heritage guide", "Sigiriya climb permit", "Polonnaruwa cycling tour"],
    excludes: ["Lunch & dinner", "International flights", "Personal expenses"],
    itinerary: [
      { day: "Day 1", title: "Colombo Arrival", desc: "Arrival at BIA and drive to Sigiriya. Check into a boutique lodge with views of the rock fortress." },
      { day: "Day 2", title: "Sigiriya Rock Fortress", desc: "Climb the 5th-century Lion Rock fortress at sunrise. Explore the mirror wall, water gardens, and frescoes with your private guide." },
      { day: "Day 3", title: "Pidurangala & Village Walk", desc: "Morning hike to Pidurangala for the best view of Sigiriya. Afternoon village bicycle tour and home-cooked lunch with a local family." },
      { day: "Day 4", title: "Polonnaruwa Ancient City", desc: "Cycle through the ancient capital of Polonnaruwa. Visit the Gal Vihara monolithic rock sculptures and Royal Palace ruins." },
      { day: "Day 5", title: "Anuradhapura Sacred City", desc: "Explore the ancient Buddhist capital — Sri Maha Bodhi sacred fig tree, Ruwanwelisaya Stupa, and Abhayagiri monastery." },
      { day: "Day 6", title: "Dambulla Cave Temples", desc: "Visit the UNESCO-listed Dambulla Cave Temple complex with over 150 Buddha statues. Afternoon free for shopping at local markets." },
      { day: "Day 7", title: "Minneriya Elephant Gathering", desc: "Jeep safari at Minneriya National Park, famous for the largest elephant gathering in Asia during the dry season." },
      { day: "Day 8", title: "Return to Colombo", desc: "Final morning at leisure. Transfer to Colombo. Depart with memories to last a lifetime." },
    ],
  },
  {
    id: "tea-country-train",
    img: "https://lp-cms-production.imgix.net/2019-06/GettyImages-497592261_high.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
    title: "Ella & Tea Country Train",
    cat: "Adventure",
    duration: "6 nights",
    price: "LKR 550,000",
    rating: 4.7,
    location: "Ella · Nuwara Eliya · Haputale",
    blurb: "Misty peaks, roaring waterfalls, and serene tea trails from a colonial-era planter's bungalow.",
    highlights: ["Scenic train ride", "Waterfall hike", "Tea factory tour"],
    includes: ["All accommodation", "Airport transfers", "Daily breakfast", "First-class train tickets", "Tea factory visit", "Ella Rock hike with guide"],
    excludes: ["Lunch & dinner", "International flights", "Personal shopping"],
    itinerary: [
      { day: "Day 1", title: "Colombo to Kandy", desc: "Arrive Colombo. Drive to Kandy stopping at a spice garden. Check in and visit the Temple of the Tooth Relic for the evening puja." },
      { day: "Day 2", title: "Kandy to Nuwara Eliya", desc: "Morning at the Peradeniya Botanical Gardens. Drive up through tea estates to Nuwara Eliya — the 'Little England' of Sri Lanka." },
      { day: "Day 3", title: "Tea Estate Exploration", desc: "Visit a working tea factory and learn the process from plucking to cup. Walk through estate gardens and enjoy a planter's high tea." },
      { day: "Day 4", title: "Scenic Train to Ella", desc: "Board the most scenic train journey in Asia from Nanu Oya to Ella. Watch misty valleys and waterfalls roll past your window." },
      { day: "Day 5", title: "Ella Rock & Nine Arch Bridge", desc: "Sunrise hike to Ella Rock for panoramic views. Visit the iconic Nine Arch Bridge and the town's famous cafes." },
      { day: "Day 6", title: "Haputale & Farewell", desc: "Morning visit to Lipton's Seat viewpoint. Afternoon transfer to Colombo or the airport." },
    ],
  },
  {
    id: "east-coast-sail",
    img: "https://static.cozycozy.com/images/catalog/bg2/horizontal-sri-lanka.jpg",
    title: "East Coast Sail & Surf",
    cat: "Island Adventures",
    duration: "7 nights",
    price: "LKR 950,000",
    rating: 5.0,
    location: "Trincomalee · Nilaveli · Arugam Bay",
    blurb: "Sail from Trincomalee to Arugam Bay aboard a chartered catamaran with a private crew.",
    highlights: ["Chartered catamaran", "Chef on board", "Surfing & snorkeling"],
    includes: ["Catamaran charter", "Private crew & chef", "All meals on board", "Snorkeling & diving equipment", "Surfing lessons at Arugam Bay", "Whale shark encounter (seasonal)"],
    excludes: ["International flights", "Personal expenses", "Alcoholic beverages beyond allowance"],
    itinerary: [
      { day: "Day 1", title: "Trincomalee Embarkation", desc: "Fly or drive to Trincomalee. Board your private catamaran. Sail to Pigeon Island Marine National Park for snorkeling." },
      { day: "Day 2", title: "Nilaveli & Reef Diving", desc: "Anchor off Nilaveli. Explore the pristine coral reef with visibility up to 25m. Sundeck yoga as the sun sets." },
      { day: "Day 3", title: "Open Sea Sailing", desc: "A full day of sailing along the east coast. Spot dolphins in the bow wave. Evening anchored in a secluded cove." },
      { day: "Day 4", title: "Passekudah Bay", desc: "Swim in the calm, shallow turquoise lagoon at Passekudah. Beach barbecue lunch on the sandbar." },
      { day: "Day 5", title: "Arugam Bay Arrival", desc: "Arrive at the legendary surf point. Professional surfing lesson for all levels. Evening in the vibrant beach town." },
      { day: "Day 6", title: "Surf & Relax", desc: "Full day to surf, paddleboard, or simply relax on the beach. Sunset dinner at a beachfront restaurant." },
      { day: "Day 7", title: "Departure", desc: "Final morning surf session. Transfer to Colombo or the airport." },
    ],
  },
  {
    id: "hill-country-wellness",
    img: "https://theportuguesetraveler.com/wp-content/uploads/2024/09/ahu-bay-hotel-best-hotels-sri-lanka-13.jpg.webp",
    title: "Hill Country Wellness Retreat",
    cat: "Luxury Escapes",
    duration: "5 nights",
    price: "LKR 600,000",
    rating: 4.9,
    location: "Kandy · Knuckles Range",
    blurb: "Sunrise yoga, Ayurvedic spa rituals, and organic garden dinners with a misty valley view.",
    highlights: ["Ayurvedic spa", "Daily yoga", "Organic dining"],
    includes: ["Luxury boutique accommodation", "Airport transfers", "Full board organic meals", "Daily yoga & meditation", "2 Ayurvedic spa treatments", "Guided forest walk"],
    excludes: ["International flights", "Additional spa treatments", "Personal expenses"],
    itinerary: [
      { day: "Day 1", title: "Arrival & Immersion", desc: "Arrive at the retreat. Consultation with the Ayurvedic physician. Welcome herbal tea ceremony and orientation walk." },
      { day: "Day 2", title: "Sunrise Yoga & Spa", desc: "6am sunrise yoga overlooking the misty valley. Morning Abhyanga oil massage. Afternoon herb garden walk and cooking class." },
      { day: "Day 3", title: "Knuckles Forest Walk", desc: "Guided eco-walk through the Knuckles Mountain Range. Bird watching and waterfall dip. Evening meditation session." },
      { day: "Day 4", title: "Deep Ayurveda Day", desc: "Full-day Ayurvedic treatment program including Shirodhara and Pizhichil. Rest, read, and restore." },
      { day: "Day 5", title: "Final Morning & Farewell", desc: "One final yoga session. Organic farewell breakfast. Transfer to Colombo or airport with renewed energy." },
    ],
  },
];
