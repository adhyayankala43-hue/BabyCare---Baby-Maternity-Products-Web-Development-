/**
 * BabyCare – Baby & Maternity E-Commerce
 * Core Frontend JavaScript Logic
 * - Product Catalog & Sample Database (featuring all 5 workspace asset folders)
 * - State Management & LocalStorage Persistence
 * - Live Search, Multi-Filter, Folder Collection Filter & Sorting Engine
 * - Dynamic Shopping Cart with Free-Shipping Meter
 * - Wishlist Management & Baby Registry
 * - Simulated Multi-Step Checkout & Order Tracker
 * - Client-Side Simulated User Authentication
 * - Toast Notification System
 */

// =============================================================================
// 1. PRODUCT CATALOG DATABASE (26 Products from Workspace Folders)
// Folders Included:
// 1. "Baby Clothing"
// 2. "Diapers & Wipes"
// 3. "Feeding & Nursing"
// 4. "Nursery & Maternity"
// 5. "babycare_webstructure"
// =============================================================================
const PRODUCTS_DATA = [
  // --- FOLDER: "Diapers & Wipes" (6 Products) ---
  {
    id: "prod-01",
    name: "BabyPure Feather-Soft White Disposable Diaper Pants",
    category: "diapers",
    categoryLabel: "Diapers & Wipes",
    collectionFolder: "Diapers & Wipes",
    collectionKey: "diapers",
    brand: "BabyPure",
    price: 899,
    originalPrice: 1199,
    image: "Diapers & Wipes/Disposable Diapers/White_disposable_baby_diaper_dis…_20261019123008.jpg",
    shortDesc: "12-hour leak lock protection with 100% plant-based soft breathable top sheet.",
    description: "Designed for delicate newborn skin, BabyPure Feather-Soft Pants offer breathable airflow channels, wetness indicator, and 360-degree gentle bubble elastic that prevents waist marks and rashes.",
    ageRange: "0-3 Months",
    rating: 4.9,
    reviewsCount: 312,
    badge: "Bestseller",
    inStock: true,
    specs: ["12-Hour Dry Absorption", "Wetness Indicator Strip", "Hypoallergenic & Fragrance-Free", "Pack of 64 Pants"]
  },
  {
    id: "prod-02",
    name: "EcoSnug Reusable Organic Cloth Diaper Set",
    category: "diapers",
    categoryLabel: "Diapers & Wipes",
    collectionFolder: "Diapers & Wipes",
    collectionKey: "diapers",
    brand: "EcoSnug",
    price: 649,
    originalPrice: 799,
    image: "Diapers & Wipes/Cloth Diapers/Cloth_diapers_displayed_on_surface_20261019123616.jpg",
    shortDesc: "Eco-friendly, washable cloth diaper with waterproof TPU outer and bamboo booster pad.",
    description: "An adjustable one-size reusable diaper that grows with your baby from 3 kg to 15 kg. Certified GOTS organic cotton lining ensures zero plastic friction on skin.",
    ageRange: "3-6 Months",
    rating: 4.8,
    reviewsCount: 148,
    badge: "Organic",
    inStock: true,
    specs: ["Washable 300+ times", "Certified GOTS Cotton Core", "Multi-Snap Sizing (3kg-15kg)", "Zero Chemicals"]
  },
  {
    id: "prod-03",
    name: "PureWater 99% Pure Water Baby Wipes (Pack of 3)",
    category: "diapers",
    categoryLabel: "Diapers & Wipes",
    collectionFolder: "Diapers & Wipes",
    collectionKey: "diapers",
    brand: "BabyPure",
    price: 499,
    originalPrice: 650,
    image: "Diapers & Wipes/Baby Wipes/Baby_wipes_packet_on_surface_20261019123912.jpg",
    shortDesc: "Extra thick, unscented water wipes formulated with 99% pure purified water and aloe vera.",
    description: "Ultra-gentle plant-based wipes formulated to clean mouth, hands, and sensitive bottoms without stinging. Pediatrician approved for day one newborns.",
    ageRange: "0-3 Months",
    rating: 4.9,
    reviewsCount: 420,
    badge: "Save 23%",
    inStock: true,
    specs: ["99% Medical-Grade Purified Water", "0% Alcohol & Parabens", "Biodegradable Viscose Fabric", "3 Packs x 72 Wipes"]
  },
  {
    id: "prod-04",
    name: "GentleShield Organic Zinc Diaper Rash Barrier Cream",
    category: "diapers",
    categoryLabel: "Diapers & Wipes",
    collectionFolder: "Diapers & Wipes",
    collectionKey: "diapers",
    brand: "LittleBliss",
    price: 389,
    originalPrice: 450,
    image: "Diapers & Wipes/Diaper Creams/Baby_diaper_cream_tube_and_20261019124236.jpg",
    shortDesc: "Soothing natural barrier cream with 15% non-nano zinc oxide, shea butter, and calendula.",
    description: "Instantly relieves redness and forms a protective breathable barrier against wetness. Enriched with chamomile flower extract to soothe irritated skin within hours.",
    ageRange: "0-3 Months",
    rating: 4.7,
    reviewsCount: 96,
    badge: "Pediatric Choice",
    inStock: true,
    specs: ["15% Non-Nano Zinc Oxide", "Organic Calendula & Jojoba", "Fast Acting Relief", "100ml Dermatological Tube"]
  },
  {
    id: "prod-05",
    name: "CloudComfort Portable Waterproof Changing Mat Clutch",
    category: "diapers",
    categoryLabel: "Diapers & Wipes",
    collectionFolder: "Diapers & Wipes",
    collectionKey: "diapers",
    brand: "SnuggleSoft",
    price: 799,
    originalPrice: 1099,
    image: "Diapers & Wipes/Changing Pads/Foldable_baby_changing_pad_20261019124516.jpg",
    shortDesc: "Foldable travel changing pad with built-in memory foam head cushion and wipe pockets.",
    description: "Compact diaper clutch that unfolds into a hygienic 70cm x 50cm cushioned changing surface. Waterproof wipe-clean lining with dedicated pocket for wipes and spare diapers.",
    ageRange: "All Ages",
    rating: 4.8,
    reviewsCount: 88,
    badge: "Essential",
    inStock: true,
    specs: ["100% Wipe-Clean Waterproof TPU", "Built-In Padded Headrest", "Clutch Handle with Stroller Clip", "Dimensions: 70cm x 50cm"]
  },
  {
    id: "prod-06",
    name: "Ultimate Newborn Diaper Care Essentials Kit & Caddy",
    category: "diapers",
    categoryLabel: "Diapers & Wipes",
    collectionFolder: "Diapers & Wipes",
    collectionKey: "diapers",
    brand: "BabyCare Signature",
    price: 1899,
    originalPrice: 2499,
    image: "Diapers & Wipes/Diaper Care Set/Baby_diaper_care_bundle_arrangement_20261022075601.jpg",
    shortDesc: "Complete starter bundle: 1 pack Diaper Pants, 2 Water Wipes, Rash Cream, and Changing Pad.",
    description: "The ideal gift set for welcoming a newborn home. Covers every diapering need from hospital bag to nursery station, packed in a keepsake reusable organic canvas caddy.",
    ageRange: "0-3 Months",
    rating: 5.0,
    reviewsCount: 175,
    badge: "Gift Set",
    inStock: true,
    specs: ["Full Diapering Station Caddy", "Includes 4 Full-Sized Essentials", "Pre-Gift Boxed", "Unisex Nursery Colors"]
  },

  // --- FOLDER: "Feeding & Nursing" (5 Products) ---
  {
    id: "prod-07",
    name: "Anti-Colic Natural Flow Glass Feeding Bottles (Set of 2)",
    category: "feeding",
    categoryLabel: "Feeding & Nursing",
    collectionFolder: "Feeding & Nursing",
    collectionKey: "feeding",
    brand: "PureNurture",
    price: 1299,
    originalPrice: 1599,
    image: "Feeding & Nursing/Baby Bottles/Baby_feeding_bottles_displayed_20261022075850.jpg",
    shortDesc: "Thermal shock resistant borosilicate glass with slow-flow breast-mimicking silicone teat.",
    description: "Engineered with an innovative dual-valve anti-colic ventilation system that reduces air ingestion and spit-up. Easy to sterilize, dishwasher safe, and free of microplastics.",
    ageRange: "0-3 Months",
    rating: 4.9,
    reviewsCount: 230,
    badge: "Bestseller",
    inStock: true,
    specs: ["Medical Borosilicate Glass (240ml)", "Breast-Shaped Flexible Teat", "Dual Air Ventilation System", "BPA & BPS Free"]
  },
  {
    id: "prod-08",
    name: "WhisperQuiet Smart Double Electric Breast Pump System",
    category: "feeding",
    categoryLabel: "Feeding & Nursing",
    collectionFolder: "Feeding & Nursing",
    collectionKey: "feeding",
    brand: "MamaGlow",
    price: 4999,
    originalPrice: 6499,
    image: "Feeding & Nursing/Breast Pumps/Modern_electric_breast_pump_set_20261022080114.jpg",
    shortDesc: "Ultra-quiet hospital-grade double electric pump with 9 suction levels & rechargeable battery.",
    description: "Features soft silicone massage cushions that mimic baby's natural suckling rhythm for pain-free letdown. USB-C rechargeable with an intuitive LED touchscreen.",
    ageRange: "Maternity",
    rating: 4.8,
    reviewsCount: 165,
    badge: "Top Rated",
    inStock: true,
    specs: ["Sub-40dB Quiet Motor", "2-Phase Expression Technology", "Rechargeable 2200mAh Battery", "Anti-Backflow Closed System"]
  },
  {
    id: "prod-09",
    name: "NutriGrow Organic Stage 1 Sprouted Cereal & Baby Food Set",
    category: "feeding",
    categoryLabel: "Feeding & Nursing",
    collectionFolder: "Feeding & Nursing",
    collectionKey: "feeding",
    brand: "NutriGrow",
    price: 549,
    originalPrice: 650,
    image: "Feeding & Nursing/Formula & Food/Baby_feeding_products_arrangement_20261022080111.jpg",
    shortDesc: "Sprouted ragi, whole oats, and strawberry teething wafers fortified with iron and zinc.",
    description: "Traditional nutrient-dense Indian first foods made from certified organic sprouted grains without added refined sugars, artificial colors, or preservatives.",
    ageRange: "6-12 Months",
    rating: 4.7,
    reviewsCount: 114,
    badge: "Organic",
    inStock: true,
    specs: ["100% Sprouted Ragi & Oats", "No Added Sugar or Salt", "Rich in Iron & Calcium", "Net Wt: 400g"]
  },
  {
    id: "prod-10",
    name: "Catch-All Waterproof Silicone Weaning Bibs & Soft Burp Cloths",
    category: "feeding",
    categoryLabel: "Feeding & Nursing",
    collectionFolder: "Feeding & Nursing",
    collectionKey: "feeding",
    brand: "TinySteps",
    price: 699,
    originalPrice: 899,
    image: "Feeding & Nursing/Bibs & Burp Cloths/Baby_feeding_bibs_and_cloths_20261022080408.jpg",
    shortDesc: "Food-grade silicone bibs with wide crumb-catcher pocket and adjustable neck snaps.",
    description: "Say goodbye to stained shirts! These food-grade silicone bibs wipe clean in seconds or can be rinsed directly under the sink. Soft and flexible against baby's neck.",
    ageRange: "6-12 Months",
    rating: 4.8,
    reviewsCount: 205,
    badge: "Save 22%",
    inStock: true,
    specs: ["100% Food-Grade Silicone", "Deep Stays-Open Crumb Pocket", "4 Adjustable Neck Sizes", "Dishwasher Safe"]
  },
  {
    id: "prod-11",
    name: "Nordica 3-in-1 Scandinavian Wooden Convertible High Chair",
    category: "feeding",
    categoryLabel: "Feeding & Nursing",
    collectionFolder: "Feeding & Nursing",
    collectionKey: "feeding",
    brand: "Nordica Baby",
    price: 6499,
    originalPrice: 8499,
    image: "Feeding & Nursing/High Chairs/Modern_baby_high_chair_20261022080507.jpg",
    shortDesc: "Scandinavian beechwood high chair convertible to toddler study chair and play seat.",
    description: "A gorgeous wooden high chair with removable dishwasher-safe food tray, 5-point safety harness, and adjustable footrest for ergonomic back support during self-feeding.",
    ageRange: "6-12 Months",
    rating: 4.9,
    reviewsCount: 78,
    badge: "Premium Wood",
    inStock: true,
    specs: ["Solid European Beechwood", "Detachable BPA-Free Tray", "Adjustable 5-Point Safety Belt", "Converts to Toddler Chair (Up to 50kg)"]
  },

  // --- FOLDER: "Baby Clothing" (5 Products) ---
  {
    id: "prod-13",
    name: "TenderStep Soft-Sole Breathable Pre-Walker Baby Moccasins",
    category: "clothing",
    categoryLabel: "Baby Clothing",
    collectionFolder: "Baby Clothing",
    collectionKey: "clothing",
    brand: "TinySteps",
    price: 699,
    originalPrice: 999,
    image: "Baby Clothing/Baby Shoes/Baby_shoes_on_pastel_backdrop_20261022081035.jpg",
    shortDesc: "Soft-sole genuine suede pre-walker moccasins with flexible non-slip grip dots.",
    description: "Podiatrist approved for developing infant feet. Soft, flexible soles allow natural foot movement and muscle development while providing traction on tile floors.",
    ageRange: "3-6 Months",
    rating: 4.8,
    reviewsCount: 110,
    badge: "Pediatric Sizing",
    inStock: true,
    specs: ["Natural Breathable Suede", "Elastic Slip-On Ankle Band", "Anti-Skid Grip Soles", "Sizes 0-6M & 6-12M"]
  },
  {
    id: "prod-14",
    name: "CozyBean Newborn Organic Knot Hat & Scratch Mitten Set",
    category: "clothing",
    categoryLabel: "Baby Clothing",
    collectionFolder: "Baby Clothing",
    collectionKey: "clothing",
    brand: "SnuggleSoft",
    price: 499,
    originalPrice: 650,
    image: "Baby Clothing/Hats & Mittens/Newborn_accessory_set_arranged_n…_20261022081123.jpg",
    shortDesc: "Adjustable top-knot beanie cap and scratch-free mittens in organic rib cotton.",
    description: "Keeps newborn babies cozy and prevents delicate face scratches. Stretchy ribbed cotton fits comfortably without putting pressure on baby's tender fontanelle.",
    ageRange: "0-3 Months",
    rating: 4.7,
    reviewsCount: 84,
    badge: "Organic",
    inStock: true,
    specs: ["100% GOTS Organic Rib Cotton", "Adjustable Knot Height", "Non-Pinch Gentle Wrist Elastic", "Newborn Hospital Bag Essential"]
  },
  {
    id: "prod-15",
    name: "CloudCotton Short-Sleeve Baby Bodysuits (Duo Pack)",
    category: "clothing",
    categoryLabel: "Baby Clothing",
    collectionFolder: "Baby Clothing",
    collectionKey: "clothing",
    brand: "BabyCare Signature",
    price: 999,
    originalPrice: 1399,
    image: "Baby Clothing/Onesies & Bodysuits/Two_baby_bodysuits_displayed_tog…_20261022081246.jpg",
    shortDesc: "Tagless, expandable lap-shoulder bodysuits with nickel-free bottom snaps.",
    description: "Everyday essentials crafted from combed organic cotton. Envelope neckline slides easily down baby's body during blowout emergencies without touching their face.",
    ageRange: "0-3 Months",
    rating: 4.9,
    reviewsCount: 260,
    badge: "Bestseller",
    inStock: true,
    specs: ["Pack of 2 Display Bodysuits", "Expandable Envelope Lap Shoulders", "Lead & Nickel-Free Snaps", "Tagless Neck Label"]
  },
  {
    id: "prod-16",
    name: "SnuggleKnit Chunky Wool-Blend Knitted Baby Cardigan",
    category: "clothing",
    categoryLabel: "Baby Clothing",
    collectionFolder: "Baby Clothing",
    collectionKey: "clothing",
    brand: "LittleBliss",
    price: 1399,
    originalPrice: 1799,
    image: "Baby Clothing/Outerwear/Knitted_baby_cardigans_on_surface_20261022081338.jpg",
    shortDesc: "Ultra-soft chunky knit cardigan with wooden toggles and cute bear ear hood.",
    description: "Warm, cozy outerwear layer made from hypoallergenic cotton-merino blend that keeps babies snug without scratchiness or overheating in AC rooms or winter mornings.",
    ageRange: "3-6 Months",
    rating: 4.8,
    reviewsCount: 92,
    badge: "Trending",
    inStock: true,
    specs: ["Hypoallergenic Wool-Cotton Blend", "Natural Coconut Shell Buttons", "Warm Winter Cardigan", "Machine Gentle Wash"]
  },
  {
    id: "prod-17",
    name: "DreamyNight Blush Pink Two-Way Zipper Bamboo Footie Sleeper",
    category: "clothing",
    categoryLabel: "Baby Clothing",
    collectionFolder: "Baby Clothing",
    collectionKey: "clothing",
    brand: "SnuggleSoft",
    price: 1199,
    originalPrice: 1499,
    image: "Baby Clothing/Sleepwear/Blush_pink_baby_sleeper_garment_20261022081522.jpg",
    shortDesc: "Silky soft bamboo viscose pajama with fold-over mitten cuffs and two-way zipper.",
    description: "Makes midnight diaper changes a breeze with a top-to-bottom two-way zipper. Thermoregulating bamboo keeps baby 3 degrees cooler in summer and warmer in winter.",
    ageRange: "0-3 Months",
    rating: 5.0,
    reviewsCount: 198,
    badge: "Top Rated",
    inStock: true,
    specs: ["95% Bamboo Viscose, 5% Spandex", "2-Way Inverted Quick Zipper", "Fold-Over Scratch Mittens", "Non-Slip Grippers on Soles"]
  },

  // --- FOLDER: "Nursery & Maternity" (5 Products) ---
  {
    id: "prod-19",
    name: "GuardAngel HD Smart Baby Monitor with Cry Detection & Night Vision",
    category: "nursery",
    categoryLabel: "Nursery",
    collectionFolder: "Nursery & Maternity",
    collectionKey: "nursery-maternity",
    brand: "GuardAngel",
    price: 4999,
    originalPrice: 6999,
    image: "Nursery & Maternity/Baby Monitors/Modern_baby_monitor_system_photo…_20261022081734.jpg",
    shortDesc: "1080p pan-tilt camera with cry detection, room temperature sensor & 2-way talkback.",
    description: "Keep continuous watch over your sleeping angel with encrypted 5-inch handheld display and smartphone app. Features non-invasive infrared night vision and built-in lullabies.",
    ageRange: "All Ages",
    rating: 4.9,
    reviewsCount: 180,
    badge: "Smart Tech",
    inStock: true,
    specs: ["1080p FHD Pan & Tilt Camera", "Encrypted Non-WiFi Handheld Screen", "Cry & Temperature Alert Sensors", "5 Soothing Lullabies Built-In"]
  },
  {
    id: "prod-20",
    name: "Havenwood Convertible Solid European Oak Baby Crib",
    category: "nursery",
    categoryLabel: "Nursery",
    collectionFolder: "Nursery & Maternity",
    collectionKey: "nursery-maternity",
    brand: "Havenwood",
    price: 18999,
    originalPrice: 23999,
    image: "Nursery & Maternity/Cribs & Bassinets/Oak_baby_crib_with_blanket_20261022081819.jpg",
    shortDesc: "Solid kiln-dried oak wood convertible crib with 3 adjustable mattress heights.",
    description: "Heirloom-quality nursery center designed to transition seamlessly from infant crib to toddler daybed and full sofa. Finished in non-toxic water-based stains that meet rigorous safety standards.",
    ageRange: "0-3 Months",
    rating: 4.9,
    reviewsCount: 65,
    badge: "Heirloom Oak",
    inStock: true,
    specs: ["Solid Kiln-Dried European Oak", "3 Mattress Height Positions", "Converts to Daybed & Toddler Bed", "Zero VOC Water-Based Finish"]
  },
  {
    id: "prod-22",
    name: "Montessori Sensory Wooden Playtime & Teething Activity Collection",
    category: "toys",
    categoryLabel: "Toys & Books",
    collectionFolder: "Nursery & Maternity",
    collectionKey: "nursery-maternity",
    brand: "LittleBliss",
    price: 999,
    originalPrice: 1299,
    image: "Nursery & Maternity/Toys & Books/Baby_playtime_collection_arrange…_20261022082238.jpg",
    shortDesc: "Set of 5 tactile beechwood rattles, grasping rings, and silicone bead teethers.",
    description: "Designed following Montessori pedagogy to stimulate auditory curiosity, fine motor pincer grasp, and relieve aching gums during primary tooth eruption.",
    ageRange: "3-6 Months",
    rating: 4.8,
    reviewsCount: 162,
    badge: "Montessori",
    inStock: true,
    specs: ["Non-Splintering Smooth Beechwood", "Food-Grade Teething Beads", "Natural Beeswax & Olive Oil Finish", "Organic Cotton Storage Pouch"]
  },
  {
    id: "prod-23",
    name: "MamaGlow Ultra-Comfort Maternity & Nursing Wrap Dress Collection",
    category: "maternity",
    categoryLabel: "Maternity",
    collectionFolder: "Nursery & Maternity",
    collectionKey: "nursery-maternity",
    brand: "MamaGlow",
    price: 1699,
    originalPrice: 2199,
    image: "Nursery & Maternity/Maternity Wear/Maternity_clothing_collection_on…_20261022081937.jpg",
    shortDesc: "Flattering drape wrap dress in breathable rayon-modal with discreet breastfeeding access.",
    description: "A versatile wardrobe centerpiece designed to accommodate growing pregnancy bumps and provide easy one-handed nursing access postpartum. Elegant enough for baby shower photos.",
    ageRange: "Maternity",
    rating: 4.8,
    reviewsCount: 120,
    badge: "Bestseller",
    inStock: true,
    specs: ["Breathable Rayon-Modal Blend", "Discreet Concealed Nursing Panel", "Adjustable Empire Waist Tie", "Available in S, M, L, XL"]
  },
  {
    id: "prod-24",
    name: "Ergonomic C-Shaped Total Body Maternity & Postpartum Nursing Pillow",
    category: "maternity",
    categoryLabel: "Maternity",
    collectionFolder: "Nursery & Maternity",
    collectionKey: "nursery-maternity",
    brand: "MamaGlow",
    price: 2199,
    originalPrice: 2899,
    image: "Nursery & Maternity/Nursing Pillows/Blush_pink_maternity_pillow_20261022082030.jpg",
    shortDesc: "Full body contour support pillow with removable washable organic velvet cover.",
    description: "Relieves pregnancy sciatica, lower back strain, and pelvic discomfort by supporting head, belly, back, and knees simultaneously. Later folds into an exceptional nursing prop.",
    ageRange: "Maternity",
    rating: 4.9,
    reviewsCount: 285,
    badge: "Top Rated",
    inStock: true,
    specs: ["Full 60-Inch C-Shape Contour", "High-Density Polyfill Support", "Removable Zippered Velvet Cover", "Multipurpose Nursing & Lounging"]
  },

  // --- FOLDER: "babycare_webstructure" (5 Signature Products) ---
  {
    id: "prod-18",
    name: "PureComfort Organic Cotton Ribbed Sleeper Onesie",
    category: "clothing",
    categoryLabel: "Baby Clothing",
    collectionFolder: "babycare_webstructure",
    collectionKey: "webstructure",
    brand: "OrganicNest",
    price: 899,
    originalPrice: 1199,
    image: "babycare_webstructure/studio_product_photography_of_an_organic_cotton_ribbed_baby_sleeper_onesie_in/screen.png",
    shortDesc: "Studio ribbed organic cotton kimono romper with fold-over scratch mittens.",
    description: "Crafted from 100% GOTS certified organic ribbed cotton. Features gentle fold-over scratch mittens for newborns and smooth two-way ankle-to-chin safety zipper.",
    ageRange: "0-3 Months",
    rating: 5.0,
    reviewsCount: 324,
    badge: "Best Seller",
    inStock: true,
    specs: ["100% GOTS Organic Ribbed Cotton", "Ankle-to-Chin Dual Way Safety Zipper", "Fold-Over Newborn Scratch Mittens", "Dermatologically Tested"]
  },
  {
    id: "prod-12",
    name: "Modern Silicone Suction Plate & Anti-Colic Bottle Set",
    category: "feeding",
    categoryLabel: "Feeding & Nursing",
    collectionFolder: "babycare_webstructure",
    collectionKey: "webstructure",
    brand: "TinySteps",
    price: 849,
    originalPrice: 1099,
    image: "babycare_webstructure/studio_product_photography_of_modern_ergonomic_baby_feeding_silicone_suction/screen.png",
    shortDesc: "100% food-grade silicone suction base that stays anchored to any high chair tray.",
    description: "Super suction base bowl with wave-edge for easy self-feeding. Paired with ergonomic beechwood soft-spoon and anti-colic vented glass feeder.",
    ageRange: "6-12 Months",
    rating: 4.9,
    reviewsCount: 189,
    badge: "Staff Pick",
    inStock: true,
    specs: ["Super-Suction Anti-Spill Base", "Curved Lip for Easy Scooping", "Soft Teething Spoon", "Microwave & Dishwasher Safe"]
  },
  {
    id: "prod-21",
    name: "Cloud & Sleeping Stars Natural Oak Crib Mobile",
    category: "nursery",
    categoryLabel: "Nursery",
    collectionFolder: "babycare_webstructure",
    collectionKey: "webstructure",
    brand: "Havenwood",
    price: 1299,
    originalPrice: 1699,
    image: "babycare_webstructure/premium_baby_nursery_wooden_crib_mobile_with_cute_soft_felt_clouds_and_sleeping/screen.png",
    shortDesc: "Gentle natural oak hoop suspending needle-felted clouds, crescent moon, and pastel stars.",
    description: "Handcrafted from 100% eco wool felt and unfinished beechwood. Designed to stimulate newborn focal tracking and promote calm sleep.",
    ageRange: "0-3 Months",
    rating: 4.9,
    reviewsCount: 98,
    badge: "New Arrival",
    inStock: true,
    specs: ["100% Eco-Friendly Wool Felt", "Natural Beechwood Hoop (24cm)", "Stimulates Visual Development", "Pre-Strung Ready to Hang"]
  },
  {
    id: "prod-25",
    name: "Serene Modal Nursing Lounge Set & Wrap Robe",
    category: "maternity",
    categoryLabel: "Maternity",
    collectionFolder: "babycare_webstructure",
    collectionKey: "webstructure",
    brand: "TenderMom",
    price: 1899,
    originalPrice: 2499,
    image: "babycare_webstructure/soft_organic_maternity_modal_nursing_pajama_set_in_subtle_dusty_rose_pink_with/screen.png",
    shortDesc: "Buttery soft modal jersey fabric with easy-clip nursing access and flattering robe.",
    description: "Buttery soft modal jersey fabric with easy-clip nursing access and flattering adjustable empire waist belt. Tailored for late pregnancy and postpartum skin-to-skin bonding.",
    ageRange: "Maternity",
    rating: 5.0,
    reviewsCount: 412,
    badge: "Maternity Favorite",
    inStock: true,
    specs: ["100% Lenzing Micromodal", "Easy Clip-Down Nursing Clips", "Adjustable Empire Waistband", "Dusty Rose Pink Finish"]
  },
  {
    id: "prod-26",
    name: "PureJoy Milestone Baby Memory Book & Keepsake Set",
    category: "toys",
    categoryLabel: "Toys & Books",
    collectionFolder: "babycare_webstructure",
    collectionKey: "webstructure",
    brand: "BabyCare Signature",
    price: 1199,
    originalPrice: 1599,
    image: "babycare_webstructure/bright_and_heartwarming_lifestyle_photography_of_an_adorable_happy_smiling_baby/screen.png",
    shortDesc: "Deluxe newborn milestone photo journal with non-toxic clean-touch foot/hand ink pad.",
    description: "Capture every smile, first giggle, and milestone from pregnancy to age 5. Includes baby-safe clean-touch ink pad, monthly milestone cards, and archival acid-free photo sleeves.",
    ageRange: "All Ages",
    rating: 5.0,
    reviewsCount: 185,
    badge: "Keepsake",
    inStock: true,
    specs: ["Clean-Touch 100% Mess-Free Ink Pad", "64 Acid-Free Archival Memory Pages", "Gold Foil Hardcover Keepsake Box", "First Year Milestones Guide"]
  }
];

// =============================================================================
// 2. GLOBAL STATE & LOCALSTORAGE PERSISTENCE
// =============================================================================
// Initialize clean defaults (0 products in cart, wishlist, and registry)
const DEFAULT_CLEAN_INIT_KEY = "babycare_empty_defaults_v1";
if (!localStorage.getItem(DEFAULT_CLEAN_INIT_KEY)) {
  localStorage.removeItem("babycare_cart");
  localStorage.removeItem("babycare_wishlist");
  localStorage.removeItem("babycare_registry");
  localStorage.setItem(DEFAULT_CLEAN_INIT_KEY, "true");
}

const APP_STATE = {
  // Shopping Cart: Array of { id, quantity, addedAt } (default 0 products)
  cart: (() => {
    try {
      const data = localStorage.getItem("babycare_cart");
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  })(),

  // Wishlist: Array of product IDs (default 0 products)
  wishlist: (() => {
    try {
      const data = localStorage.getItem("babycare_wishlist");
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  })(),

  // Baby Registry: Array of { id, reserved: boolean, by: string|null } (default 0 products)
  registry: (() => {
    try {
      const data = localStorage.getItem("babycare_registry");
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  })(),

  // Orders History: Array of simulated past orders
  orders: JSON.parse(localStorage.getItem("babycare_orders")) || [
    {
      orderId: "BC-81204",
      date: "2026-10-18",
      items: [
        { id: "prod-03", name: "PureWater 99% Baby Wipes (3-Pack)", price: 499, qty: 1 },
        { id: "prod-14", name: "CozyBean Knot Hat & Mitten Set", price: 499, qty: 1 }
      ],
      total: 998,
      status: "Dispatched",
      paymentMethod: "Cash on Delivery",
      shippingAddress: "Radhika Sharma, Flat 402, Sunshine Heights, Mumbai 400001",
      deliverySpeed: "Standard Delivery"
    }
  ],

  // Current Logged In User profile
  user: JSON.parse(localStorage.getItem("babycare_user")) || null,

  // Active Coupon Code
  activeCoupon: {
    code: null,
    discountPercent: 0,
    discountFlat: 0
  },

  // Active Catalog Filters
  filters: {
    category: "all",
    collectionKey: "all",
    ageGroup: "all",
    maxPrice: 25000,
    sortBy: "featured",
    searchQuery: ""
  },

  // Checkout Temp Data
  checkoutData: {
    shipping: null,
    deliverySpeed: "standard",
    paymentMethod: "cod"
  }
};

// State persistence helpers
function saveCartToStorage() {
  localStorage.setItem("babycare_cart", JSON.stringify(APP_STATE.cart));
  updateHeaderBadges();
}
function saveWishlistToStorage() {
  localStorage.setItem("babycare_wishlist", JSON.stringify(APP_STATE.wishlist));
  updateHeaderBadges();
}
function saveRegistryToStorage() {
  localStorage.setItem("babycare_registry", JSON.stringify(APP_STATE.registry));
}
function saveOrdersToStorage() {
  localStorage.setItem("babycare_orders", JSON.stringify(APP_STATE.orders));
}
function saveUserToStorage() {
  localStorage.setItem("babycare_user", JSON.stringify(APP_STATE.user));
  updateUserUI();
}

// Format INR Currency
function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

// Fallback image URL
const IMAGE_FALLBACK_URL = "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80";

// =============================================================================
// 3. CATALOG RENDERING & DYNAMIC FILTERING ENGINE
// =============================================================================
function renderProducts(productsToRender) {
  const gridContainer = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyProductsState");
  const resultCount = document.getElementById("shopResultCount");

  if (!gridContainer) return;

  if (productsToRender.length === 0) {
    gridContainer.style.display = "none";
    emptyState.style.display = "block";
    resultCount.textContent = "0 products found";
    return;
  }

  gridContainer.style.display = "grid";
  emptyState.style.display = "none";
  resultCount.textContent = `Showing ${productsToRender.length} verified baby care products`;

  gridContainer.innerHTML = productsToRender.map(product => {
    const isWishlisted = APP_STATE.wishlist.includes(product.id);
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const safeImgSrc = encodeURI(product.image);

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image-container" onclick="openProductModal('${product.id}')">
          <img 
            src="${safeImgSrc}" 
            alt="${product.name}" 
            class="product-thumb" 
            loading="lazy"
            onerror="this.onerror=null; this.src='${IMAGE_FALLBACK_URL}';"
          >
          <div class="product-badges">
            ${product.badge ? `<span class="p-badge ${product.badge.toLowerCase().replace(/\s+/g, '-')}">${product.badge}</span>` : ''}
            ${discount > 0 ? `<span class="p-badge discount">${discount}% OFF</span>` : ''}
          </div>
          <button 
            type="button" 
            class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
            onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
            aria-label="Save to Wishlist"
            title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
          >
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          <button type="button" class="quick-view-overlay-btn" onclick="event.stopPropagation(); openProductModal('${product.id}')">
            <i class="fa-regular fa-eye"></i> Quick View
          </button>
        </div>

        <div class="product-content">
          <div class="product-meta-row">
            <span class="product-brand">${product.brand}</span>
          </div>

          <h3 class="product-title" onclick="openProductModal('${product.id}')" title="${product.name}">
            ${product.name}
          </h3>

          <p class="product-desc-snippet">${product.shortDesc}</p>

          <div class="product-rating-row">
            <div class="star-rating">
              ${renderStars(product.rating)}
            </div>
            <span class="rating-num">${product.rating}</span>
            <span class="reviews-count">(${product.reviewsCount})</span>
            <span class="product-age-chip ml-auto">${product.ageRange}</span>
          </div>

          <div class="product-price-row">
            <span class="current-price">${formatINR(product.price)}</span>
            ${product.originalPrice > product.price ? `
              <span class="original-price">${formatINR(product.originalPrice)}</span>
              <span class="save-percent">Save ${discount}%</span>
            ` : ''}
          </div>

          <button 
            type="button" 
            class="btn btn-add-cart" 
            onclick="addToCart('${product.id}', 1, true)"
          >
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Generate Star Rating HTML
function renderStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.4;

  for (let i = 0; i < fullStars; i++) {
    stars += `<i class="fa-solid fa-star"></i>`;
  }
  if (hasHalfStar) {
    stars += `<i class="fa-solid fa-star-half-stroke"></i>`;
  }
  const remaining = 5 - Math.ceil(rating);
  for (let i = 0; i < remaining; i++) {
    stars += `<i class="fa-regular fa-star"></i>`;
  }
  return stars;
}

// Filtering & Sorting Pipeline
function applyFiltersAndSort() {
  let results = [...PRODUCTS_DATA];

  // 1. Search Query Filter
  if (APP_STATE.filters.searchQuery.trim() !== "") {
    const q = APP_STATE.filters.searchQuery.toLowerCase().trim();
    results = results.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.collectionFolder.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q)
    );
  }

  // 2. Collection Directory Filter
  if (APP_STATE.filters.collectionKey !== "all") {
    results = results.filter(p => p.collectionKey === APP_STATE.filters.collectionKey);
  }

  // 3. Category Filter
  if (APP_STATE.filters.category !== "all") {
    results = results.filter(p => p.category === APP_STATE.filters.category);
  }

  // 4. Age Group Filter
  if (APP_STATE.filters.ageGroup !== "all") {
    results = results.filter(p => p.ageRange === APP_STATE.filters.ageGroup || p.ageRange === "All Ages");
  }

  // 5. Max Price Filter
  results = results.filter(p => p.price <= APP_STATE.filters.maxPrice);

  // 6. Sorting
  switch (APP_STATE.filters.sortBy) {
    case "price-asc":
      results.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      results.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      results.sort((a, b) => b.rating - a.rating);
      break;
    case "popular":
      results.sort((a, b) => b.reviewsCount - a.reviewsCount);
      break;
    case "featured":
    default:
      break;
  }

  // Render products and active tags
  renderProducts(results);
  renderActiveFilterTags();
}

// Collection Directory Filter Trigger
function filterByCollection(collectionKey) {
  APP_STATE.filters.collectionKey = collectionKey;

  // If specific collection selected, reset general category so user sees whole collection
  if (collectionKey !== "all") {
    APP_STATE.filters.category = "all";
    document.querySelectorAll(".pill-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-cat") === "all");
    });
  }

  // Update collection chip buttons
  document.querySelectorAll(".col-chip").forEach(chip => {
    chip.classList.toggle("active", chip.getAttribute("data-col") === collectionKey);
  });

  // Update shop title
  const shopTitle = document.getElementById("shopTitle");
  if (shopTitle) {
    const titles = {
      all: "Our Baby & Maternity Collection",
      clothing: "Baby Clothing Collection",
      diapers: "Diapers & Wipes Collection",
      feeding: "Feeding & Nursing Collection",
      "nursery-maternity": "Nursery & Maternity Collection",
      webstructure: "Studio Signature Collection (Webstructure)"
    };
    shopTitle.textContent = titles[collectionKey] || "Baby Care Collection";
  }

  applyFiltersAndSort();
  scrollToShop();
}

// Category Filter Trigger
function filterByCategory(categoryName) {
  APP_STATE.filters.category = categoryName;

  // Reset collection folder filter if user is browsing by category
  if (categoryName !== "all") {
    APP_STATE.filters.collectionKey = "all";
    document.querySelectorAll(".col-chip").forEach(chip => {
      chip.classList.toggle("active", chip.getAttribute("data-col") === "all");
    });
  }

  // Update Category Pill buttons
  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-cat") === categoryName);
  });

  // Update Desktop Nav Links active highlight
  document.querySelectorAll(".category-nav .nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("data-nav") === categoryName);
  });

  // Update Title
  const shopTitle = document.getElementById("shopTitle");
  if (shopTitle) {
    if (categoryName === "all") shopTitle.textContent = "Our Baby & Maternity Collection";
    else {
      const match = PRODUCTS_DATA.find(p => p.category === categoryName);
      shopTitle.textContent = match ? match.categoryLabel : "Baby Care Products";
    }
  }

  applyFiltersAndSort();
  scrollToShop();
}

// Age Group Filter Trigger
function filterByAgeGroup(ageGroup) {
  APP_STATE.filters.ageGroup = ageGroup;

  document.querySelectorAll(".stage-btn").forEach(btn => {
    const text = btn.querySelector("strong") ? btn.querySelector("strong").textContent : "";
    btn.classList.toggle("active", text.includes(ageGroup) || (ageGroup === "Maternity" && text.includes("Maternity")));
  });

  const ageSelect = document.getElementById("ageFilterSelect");
  if (ageSelect) ageSelect.value = ageGroup;

  applyFiltersAndSort();
  scrollToShop();
}

function handlePriceFilter(maxPrice) {
  APP_STATE.filters.maxPrice = Number(maxPrice);
  document.getElementById("priceDisplay").textContent = formatINR(maxPrice);
  applyFiltersAndSort();
}

function handleAgeSelectChange(ageGroup) {
  APP_STATE.filters.ageGroup = ageGroup;
  applyFiltersAndSort();
}

function handleSortChange(sortOption) {
  APP_STATE.filters.sortBy = sortOption;
  applyFiltersAndSort();
}

function resetAllFilters() {
  APP_STATE.filters = {
    category: "all",
    collectionKey: "all",
    ageGroup: "all",
    maxPrice: 25000,
    sortBy: "featured",
    searchQuery: ""
  };

  // Reset controls
  document.getElementById("priceRangeInput").value = 25000;
  document.getElementById("priceDisplay").textContent = "₹25,000";
  document.getElementById("ageFilterSelect").value = "all";
  document.getElementById("sortSelect").value = "featured";
  document.getElementById("globalSearchInput").value = "";
  document.getElementById("searchClearBtn").style.display = "none";

  // Reset Pills & Chips
  document.querySelectorAll(".col-chip").forEach(chip => chip.classList.toggle("active", chip.getAttribute("data-col") === "all"));
  document.querySelectorAll(".pill-btn").forEach(btn => btn.classList.toggle("active", btn.getAttribute("data-cat") === "all"));
  document.querySelectorAll(".category-nav .nav-link").forEach(link => link.classList.toggle("active", link.getAttribute("data-nav") === "all"));
  document.querySelectorAll(".stage-btn").forEach(btn => btn.classList.remove("active"));

  applyFiltersAndSort();
  showToast("Filters reset to default (All 26 Products)", "info");
}

function renderActiveFilterTags() {
  const row = document.getElementById("activeTagsRow");
  const container = document.getElementById("tagChipsContainer");
  if (!row || !container) return;

  const chips = [];

  if (APP_STATE.filters.searchQuery) {
    chips.push({ label: `Search: "${APP_STATE.filters.searchQuery}"`, onRemove: () => clearGlobalSearch() });
  }
  if (APP_STATE.filters.collectionKey !== "all") {
    chips.push({ label: `Collection: ${APP_STATE.filters.collectionKey}`, onRemove: () => filterByCollection("all") });
  }
  if (APP_STATE.filters.category !== "all") {
    chips.push({ label: `Category: ${APP_STATE.filters.category}`, onRemove: () => filterByCategory("all") });
  }
  if (APP_STATE.filters.ageGroup !== "all") {
    chips.push({ label: `Age: ${APP_STATE.filters.ageGroup}`, onRemove: () => handleAgeSelectChange("all") });
  }
  if (APP_STATE.filters.maxPrice < 25000) {
    chips.push({ label: `Under ${formatINR(APP_STATE.filters.maxPrice)}`, onRemove: () => handlePriceFilter(25000) });
  }

  if (chips.length === 0) {
    row.style.display = "none";
    return;
  }

  row.style.display = "flex";
  container.innerHTML = chips.map((c, i) => `
    <span class="tag-chip">
      ${c.label}
      <button onclick="window.activeChipRemovers[${i}]()" title="Remove filter">&times;</button>
    </span>
  `).join("");

  window.activeChipRemovers = chips.map(c => c.onRemove);
}

// =============================================================================
// 4. GLOBAL SEARCH & AUTOCOMPLETE ENGINE
// =============================================================================
const globalSearchInput = document.getElementById("globalSearchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const searchClearBtn = document.getElementById("searchClearBtn");

if (globalSearchInput) {
  globalSearchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    searchClearBtn.style.display = val ? "block" : "none";

    if (!val.trim()) {
      searchSuggestions.style.display = "none";
      APP_STATE.filters.searchQuery = "";
      applyFiltersAndSort();
      return;
    }

    const matches = PRODUCTS_DATA.filter(p => 
      p.name.toLowerCase().includes(val.toLowerCase()) ||
      p.brand.toLowerCase().includes(val.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(val.toLowerCase()) ||
      p.collectionFolder.toLowerCase().includes(val.toLowerCase())
    ).slice(0, 5);

    if (matches.length > 0) {
      searchSuggestions.innerHTML = matches.map(p => `
        <div class="suggestion-item" onclick="selectSearchSuggestion('${p.id}')">
          <img src="${encodeURI(p.image)}" class="suggestion-img" alt="${p.name}" onerror="this.src='${IMAGE_FALLBACK_URL}';">
          <div class="suggestion-info">
            <div class="suggestion-title">${p.name}</div>
            <div class="suggestion-meta">${p.brand} &bull; ${p.categoryLabel || p.collectionFolder}</div>
          </div>
          <div class="suggestion-price">${formatINR(p.price)}</div>
        </div>
      `).join("");
      searchSuggestions.style.display = "block";
    } else {
      searchSuggestions.innerHTML = `
        <div style="padding: 14px 16px; font-size: 0.88rem; color: #888;">
          No matching products found. Press Enter to search full catalog.
        </div>
      `;
      searchSuggestions.style.display = "block";
    }
  });

  // Close search suggestions on click outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-search-container")) {
      searchSuggestions.style.display = "none";
    }
  });
}

function handleSearchSubmit(event) {
  event.preventDefault();
  const query = globalSearchInput.value.trim();
  APP_STATE.filters.searchQuery = query;
  searchSuggestions.style.display = "none";
  applyFiltersAndSort();
  scrollToShop();
}

function selectSearchSuggestion(productId) {
  searchSuggestions.style.display = "none";
  openProductModal(productId);
}

function clearGlobalSearch() {
  globalSearchInput.value = "";
  searchClearBtn.style.display = "none";
  searchSuggestions.style.display = "none";
  APP_STATE.filters.searchQuery = "";
  applyFiltersAndSort();
}

function handleMobileSearch(e) {
  e.preventDefault();
  const val = document.getElementById("mobileSearchInput").value.trim();
  closeMobileMenu();
  APP_STATE.filters.searchQuery = val;
  applyFiltersAndSort();
  scrollToShop();
}

// =============================================================================
// 5. SHOPPING CART ENGINE (With Free Shipping Meter & Coupons)
// =============================================================================
function addToCart(productId, quantity = 1, showFeedback = true) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = APP_STATE.cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    APP_STATE.cart[existingIndex].quantity += quantity;
  } else {
    APP_STATE.cart.push({
      id: productId,
      quantity: quantity,
      addedAt: Date.now()
    });
  }

  saveCartToStorage();
  renderCartDrawer();

  if (showFeedback) {
    showToast(`Added "${product.name}" to cart!`, "success");
    const cartBtn = document.getElementById("cartHeaderBtn");
    if (cartBtn) {
      cartBtn.classList.add("animate-bounce");
      setTimeout(() => cartBtn.classList.remove("animate-bounce"), 600);
    }
  }
}

function removeFromCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  APP_STATE.cart = APP_STATE.cart.filter(item => item.id !== productId);
  saveCartToStorage();
  renderCartDrawer();
  showToast(`Removed from cart`, "info");
}

function updateCartQuantity(productId, newQty) {
  if (newQty < 1) return; // Prevent quantity going below 1
  const item = APP_STATE.cart.find(i => i.id === productId);
  if (item) {
    item.quantity = newQty;
    saveCartToStorage();
    renderCartDrawer();
  }
}

function calculateCartTotals() {
  let subtotal = 0;
  let totalItemsCount = 0;

  APP_STATE.cart.forEach(item => {
    const product = PRODUCTS_DATA.find(p => p.id === item.id);
    if (product) {
      subtotal += product.price * item.quantity;
      totalItemsCount += item.quantity;
    }
  });

  // Calculate Discount
  let discount = 0;
  if (APP_STATE.activeCoupon.discountPercent > 0) {
    discount = Math.round(subtotal * (APP_STATE.activeCoupon.discountPercent / 100));
  } else if (APP_STATE.activeCoupon.discountFlat > 0) {
    discount = Math.min(APP_STATE.activeCoupon.discountFlat, subtotal);
  }

  // Shipping Calculation: Free above ₹999, else ₹99
  const isFreeShipping = subtotal >= 999;
  const shippingFee = subtotal === 0 ? 0 : (isFreeShipping ? 0 : 99);
  const grandTotal = Math.max(0, subtotal - discount + shippingFee);

  return {
    subtotal,
    discount,
    shippingFee,
    grandTotal,
    totalItemsCount,
    isFreeShipping,
    amountNeededForFreeShipping: Math.max(0, 999 - subtotal)
  };
}

function renderCartDrawer() {
  const container = document.getElementById("cartItemsContainer");
  const emptyView = document.getElementById("emptyCartView");
  const drawerFooter = document.getElementById("cartDrawerFooter");
  const countBadge = document.getElementById("cartDrawerCount");
  const totals = calculateCartTotals();

  countBadge.textContent = totals.totalItemsCount;

  if (APP_STATE.cart.length === 0) {
    container.innerHTML = "";
    container.style.display = "none";
    emptyView.style.display = "flex";
    drawerFooter.style.display = "none";
    updateShippingMeter(0, 999);
    return;
  }

  container.style.display = "flex";
  emptyView.style.display = "none";
  drawerFooter.style.display = "block";

  container.innerHTML = APP_STATE.cart.map(item => {
    const product = PRODUCTS_DATA.find(p => p.id === item.id);
    if (!product) return "";

    return `
      <div class="cart-item-card">
        <img 
          src="${encodeURI(product.image)}" 
          alt="${product.name}" 
          class="cart-item-img"
          onerror="this.src='${IMAGE_FALLBACK_URL}';"
        >
        <div class="cart-item-details">
          <h4 class="cart-item-title">${product.name}</h4>
          <div class="cart-item-price">${formatINR(product.price)}</div>
          <div class="cart-item-controls">
            <div class="quantity-stepper">
              <button 
                class="stepper-btn" 
                onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})"
                ${item.quantity <= 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}
              >
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="stepper-val">${item.quantity}</span>
              <button 
                class="stepper-btn" 
                onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})"
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <button 
              class="cart-item-remove-btn" 
              onclick="removeFromCart('${item.id}')" 
              title="Remove item"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  document.getElementById("cartSubtotal").textContent = formatINR(totals.subtotal);
  document.getElementById("cartShipping").textContent = totals.shippingFee === 0 ? "FREE" : formatINR(totals.shippingFee);
  document.getElementById("cartGrandTotal").textContent = formatINR(totals.grandTotal);

  const discountRow = document.getElementById("cartDiscountRow");
  if (totals.discount > 0) {
    discountRow.style.display = "flex";
    document.getElementById("cartDiscount").textContent = `-${formatINR(totals.discount)}`;
  } else {
    discountRow.style.display = "none";
  }

  updateShippingMeter(totals.subtotal, totals.amountNeededForFreeShipping);
}

function updateShippingMeter(subtotal, amountNeeded) {
  const meterText = document.getElementById("shippingMeterText");
  const meterFill = document.getElementById("shippingMeterFill");
  if (!meterText || !meterFill) return;

  if (subtotal >= 999) {
    meterText.innerHTML = "🎉 <strong>Congratulations!</strong> You unlocked FREE Express Shipping!";
    meterFill.style.width = "100%";
    meterFill.style.backgroundColor = "var(--success-green)";
  } else {
    const percent = Math.min(100, Math.round((subtotal / 999) * 100));
    meterText.innerHTML = `Add <strong>${formatINR(amountNeeded)}</strong> more for <strong>FREE Express Shipping!</strong>`;
    meterFill.style.width = `${percent}%`;
    meterFill.style.backgroundColor = "var(--primary-pink)";
  }
}

function applyCartCoupon() {
  const input = document.getElementById("cartCouponInput");
  const feedback = document.getElementById("couponFeedback");
  const code = input.value.trim().toUpperCase();

  if (!code) {
    feedback.className = "coupon-feedback error";
    feedback.textContent = "Please enter a coupon code.";
    return;
  }

  if (code === "BABYCARE10") {
    APP_STATE.activeCoupon = { code: "BABYCARE10", discountPercent: 10, discountFlat: 0 };
    feedback.className = "coupon-feedback success";
    feedback.textContent = "Coupon 'BABYCARE10' applied: 10% discount!";
    showToast("10% Discount applied!", "success");
  } else if (code === "FIRSTBABY" || code === "WELCOME200") {
    APP_STATE.activeCoupon = { code: code, discountPercent: 0, discountFlat: 200 };
    feedback.className = "coupon-feedback success";
    feedback.textContent = `Coupon '${code}' applied: Flat ₹200 savings!`;
    showToast("Flat ₹200 Voucher applied!", "success");
  } else {
    feedback.className = "coupon-feedback error";
    feedback.textContent = "Invalid promo code. Try BABYCARE10 or FIRSTBABY.";
    return;
  }

  renderCartDrawer();
}

function copyPromoCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Promo code '${code}' copied to clipboard!`, "success");
  }).catch(() => {
    showToast(`Promo code: ${code}`, "info");
  });
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cartOverlay").classList.add("active");
  document.getElementById("cartDrawer").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  document.getElementById("cartOverlay").classList.remove("active");
  document.getElementById("cartDrawer").classList.remove("active");
  document.body.style.overflow = "auto";
}

// =============================================================================
// 6. WISHLIST MANAGEMENT
// =============================================================================
function toggleWishlist(productId) {
  const index = APP_STATE.wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (index > -1) {
    APP_STATE.wishlist.splice(index, 1);
    showToast(`Removed "${product ? product.name : 'Item'}" from wishlist`, "info");
  } else {
    APP_STATE.wishlist.push(productId);
    showToast(`Added "${product ? product.name : 'Item'}" to your wishlist!`, "success");
  }

  saveWishlistToStorage();
  applyFiltersAndSort();
  renderWishlistDrawer();
}

function renderWishlistDrawer() {
  const container = document.getElementById("wishlistItemsContainer");
  const emptyView = document.getElementById("emptyWishlistView");
  const countBadge = document.getElementById("wishlistDrawerCount");

  countBadge.textContent = APP_STATE.wishlist.length;

  if (APP_STATE.wishlist.length === 0) {
    container.innerHTML = "";
    container.style.display = "none";
    emptyView.style.display = "flex";
    return;
  }

  container.style.display = "flex";
  emptyView.style.display = "none";

  container.innerHTML = APP_STATE.wishlist.map(id => {
    const product = PRODUCTS_DATA.find(p => p.id === id);
    if (!product) return "";

    return `
      <div class="cart-item-card">
        <img 
          src="${encodeURI(product.image)}" 
          alt="${product.name}" 
          class="cart-item-img"
          onerror="this.src='${IMAGE_FALLBACK_URL}';"
        >
        <div class="cart-item-details">
          <h4 class="cart-item-title">${product.name}</h4>
          <div class="cart-item-price">${formatINR(product.price)}</div>
          <div class="cart-item-controls">
            <button 
              class="btn btn-primary btn-sm" 
              onclick="moveWishlistToCart('${product.id}')"
            >
              <i class="fa-solid fa-cart-plus"></i> Move to Cart
            </button>
            <button 
              class="cart-item-remove-btn" 
              onclick="toggleWishlist('${product.id}')" 
              title="Remove from wishlist"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function moveWishlistToCart(productId) {
  addToCart(productId, 1, false);
  toggleWishlist(productId);
  showToast("Moved item to your Shopping Cart!", "success");
  closeWishlistDrawer();
  openCartDrawer();
}

function openWishlistDrawer() {
  renderWishlistDrawer();
  document.getElementById("wishlistOverlay").classList.add("active");
  document.getElementById("wishlistDrawer").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWishlistDrawer() {
  document.getElementById("wishlistOverlay").classList.remove("active");
  document.getElementById("wishlistDrawer").classList.remove("active");
  document.body.style.overflow = "auto";
}

// =============================================================================
// 7. PRODUCT DETAILS QUICK-VIEW MODAL
// =============================================================================
let currentModalProductId = null;
let currentModalQty = 1;

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  currentModalProductId = productId;
  currentModalQty = 1;

  const contentBox = document.getElementById("productModalContent");
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const isWishlisted = APP_STATE.wishlist.includes(product.id);

  // Find related products in same category or collection
  const related = PRODUCTS_DATA.filter(p => (p.category === product.category || p.collectionKey === product.collectionKey) && p.id !== product.id).slice(0, 4);

  contentBox.innerHTML = `
    <div class="modal-product-img-box">
      <img 
        src="${encodeURI(product.image)}" 
        alt="${product.name}" 
        onerror="this.src='${IMAGE_FALLBACK_URL}';"
      >
    </div>

    <div class="modal-product-info">
      <div class="modal-meta-bar">
        <span class="product-brand">${product.brand}</span>
        <span class="product-age-chip"><i class="fa-solid fa-calendar-check"></i> ${product.ageRange}</span>
        <span class="text-green" style="font-weight: 700; font-size: 0.8rem;"><i class="fa-solid fa-circle-check"></i> In Stock</span>
      </div>

      <h2>${product.name}</h2>

      <div class="product-rating-row">
        <div class="star-rating">${renderStars(product.rating)}</div>
        <strong class="rating-num">${product.rating}</strong>
        <span class="reviews-count">(${product.reviewsCount} verified reviews)</span>
      </div>

      <div class="modal-price-box">
        <span class="modal-current-price">${formatINR(product.price)}</span>
        ${product.originalPrice > product.price ? `
          <span class="modal-old-price">${formatINR(product.originalPrice)}</span>
          <span class="p-badge discount">Save ${discount}%</span>
        ` : ''}
      </div>

      <p class="modal-desc">${product.description}</p>

      <ul class="modal-specs-list">
        ${product.specs.map(spec => `<li><i class="fa-solid fa-circle-check"></i> ${spec}</li>`).join("")}
      </ul>

      <div class="modal-action-row">
        <div class="quantity-stepper" style="padding: 4px;">
          <button class="stepper-btn" onclick="adjustModalQty(-1)"><i class="fa-solid fa-minus"></i></button>
          <span class="stepper-val" id="modalQtyVal" style="font-size: 1.1rem; padding: 0 10px;">1</span>
          <button class="stepper-btn" onclick="adjustModalQty(1)"><i class="fa-solid fa-plus"></i></button>
        </div>

        <button class="btn btn-primary btn-lg" onclick="addModalItemToCart()">
          <i class="fa-solid fa-cart-shopping"></i> Add to Cart
        </button>

        <button 
          class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
          style="position: static; width: 48px; height: 48px; font-size: 1.3rem;"
          onclick="toggleWishlist('${product.id}'); openProductModal('${product.id}');"
          title="Save to Wishlist"
        >
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <button 
          class="btn btn-secondary btn-sm" 
          onclick="addToRegistry('${product.id}')"
          title="Add to Baby Registry"
        >
          <i class="fa-solid fa-gift"></i> Registry
        </button>
      </div>
    </div>

    ${related.length > 0 ? `
      <div class="related-products-box">
        <h4>Related In ${product.categoryLabel || product.collectionFolder}</h4>
        <div class="related-grid">
          ${related.map(r => `
            <div class="related-item-card" onclick="openProductModal('${r.id}')">
              <img src="${encodeURI(r.image)}" alt="${r.name}" onerror="this.src='${IMAGE_FALLBACK_URL}';">
              <strong>${r.name}</strong>
              <span>${formatINR(r.price)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    ` : ''}
  `;

  document.getElementById("productModalBackdrop").classList.add("active");
  document.getElementById("productModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function adjustModalQty(delta) {
  currentModalQty = Math.max(1, currentModalQty + delta);
  const qtyEl = document.getElementById("modalQtyVal");
  if (qtyEl) qtyEl.textContent = currentModalQty;
}

function addModalItemToCart() {
  if (currentModalProductId) {
    addToCart(currentModalProductId, currentModalQty, true);
    closeProductModal();
    openCartDrawer();
  }
}

function closeProductModal() {
  document.getElementById("productModalBackdrop").classList.remove("active");
  document.getElementById("productModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

// =============================================================================
// 8. MULTI-STEP CHECKOUT SIMULATION ENGINE
// =============================================================================
function proceedToCheckout() {
  if (APP_STATE.cart.length === 0) {
    showToast("Your cart is empty! Add products first.", "error");
    return;
  }

  closeCartDrawer();

  if (APP_STATE.user) {
    document.getElementById("shipFullName").value = APP_STATE.user.name || "";
    document.getElementById("shipEmail").value = APP_STATE.user.email || "";
    if (APP_STATE.user.phone) document.getElementById("shipPhone").value = APP_STATE.user.phone;
  }

  backToCheckoutStep1();

  document.getElementById("checkoutBackdrop").classList.add("active");
  document.getElementById("checkoutModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkoutBackdrop").classList.remove("active");
  document.getElementById("checkoutModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function handleDeliverySpeedChange(speed) {
  APP_STATE.checkoutData.deliverySpeed = speed;

  document.getElementById("deliveryStandardLabel").classList.toggle("active", speed === "standard");
  document.getElementById("deliveryExpressLabel").classList.toggle("active", speed === "express");

  updateCheckoutSummary();
}

function handleShippingSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("shipFullName").value.trim();
  const phone = document.getElementById("shipPhone").value.trim();
  const email = document.getElementById("shipEmail").value.trim();
  const address = document.getElementById("shipAddress").value.trim();
  const city = document.getElementById("shipCity").value.trim();
  const state = document.getElementById("shipState").value;
  const pincode = document.getElementById("shipPincode").value.trim();

  if (!name || !phone || !email || !address || !city || !state || !pincode) {
    showToast("Please fill all required shipping fields.", "error");
    return;
  }

  if (pincode.length !== 6 || isNaN(pincode)) {
    showToast("Please enter a valid 6-digit Indian PIN code.", "error");
    return;
  }

  APP_STATE.checkoutData.shipping = {
    name, phone, email, address, city, state, pincode
  };

  goToCheckoutStep2();
}

function goToCheckoutStep2() {
  document.getElementById("checkoutStep1").style.display = "none";
  document.getElementById("checkoutStep2").style.display = "block";

  document.getElementById("stepIndicator1").classList.remove("active");
  document.getElementById("stepIndicator2").classList.add("active");

  updateCheckoutSummary();
}

function backToCheckoutStep1() {
  document.getElementById("checkoutStep1").style.display = "block";
  document.getElementById("checkoutStep2").style.display = "none";

  document.getElementById("stepIndicator1").classList.add("active");
  document.getElementById("stepIndicator2").classList.remove("active");
}

function selectPaymentMethod(method) {
  APP_STATE.checkoutData.paymentMethod = method;

  document.querySelectorAll(".pay-tab").forEach(tab => {
    tab.classList.toggle("active", tab.getAttribute("data-method") === method);
  });

  document.getElementById("payPanelCOD").style.display = method === "cod" ? "block" : "none";
  document.getElementById("payPanelUPI").style.display = method === "upi" ? "block" : "none";
  document.getElementById("payPanelCard").style.display = method === "card" ? "block" : "none";
}

function updateCheckoutSummary() {
  const totals = calculateCartTotals();
  const previewBox = document.getElementById("checkoutItemsPreview");

  let deliveryFee = totals.shippingFee;
  if (APP_STATE.checkoutData.deliverySpeed === "express") {
    deliveryFee = 149;
  }

  const finalGrandTotal = Math.max(0, totals.subtotal - totals.discount + deliveryFee);

  previewBox.innerHTML = APP_STATE.cart.map(item => {
    const product = PRODUCTS_DATA.find(p => p.id === item.id);
    if (!product) return "";
    return `
      <div class="co-preview-item">
        <span class="co-item-name">${item.quantity}x ${product.name}</span>
        <strong>${formatINR(product.price * item.quantity)}</strong>
      </div>
    `;
  }).join("");

  document.getElementById("coSubtotal").textContent = formatINR(totals.subtotal);
  document.getElementById("coShipping").textContent = deliveryFee === 0 ? "FREE" : formatINR(deliveryFee);
  document.getElementById("coGrandTotal").textContent = formatINR(finalGrandTotal);

  const discountRow = document.getElementById("coDiscountLine");
  if (totals.discount > 0) {
    discountRow.style.display = "flex";
    document.getElementById("coDiscount").textContent = `-${formatINR(totals.discount)}`;
  } else {
    discountRow.style.display = "none";
  }

  const addrBox = document.getElementById("delAddressSummary");
  if (APP_STATE.checkoutData.shipping) {
    const s = APP_STATE.checkoutData.shipping;
    addrBox.innerHTML = `
      <strong>Deliver to:</strong> ${s.name} (${s.phone})<br>
      ${s.address}, ${s.city}, ${s.state} - ${s.pincode}
    `;
  }
}

function completeSimulatedOrder() {
  const totals = calculateCartTotals();
  let deliveryFee = totals.shippingFee;
  if (APP_STATE.checkoutData.deliverySpeed === "express") {
    deliveryFee = 149;
  }
  const finalTotal = Math.max(0, totals.subtotal - totals.discount + deliveryFee);

  const orderNum = "BC-" + Math.floor(10000 + Math.random() * 90000);
  const now = new Date();
  const dateStr = now.toISOString().split("T")[0];

  let payName = "Cash on Delivery";
  if (APP_STATE.checkoutData.paymentMethod === "upi") payName = "Simulated UPI (Instant)";
  if (APP_STATE.checkoutData.paymentMethod === "card") payName = "Simulated Card";

  const orderedItems = APP_STATE.cart.map(item => {
    const p = PRODUCTS_DATA.find(prod => prod.id === item.id);
    return {
      id: item.id,
      name: p ? p.name : "Baby Care Item",
      price: p ? p.price : 0,
      qty: item.quantity
    };
  });

  const newOrder = {
    orderId: orderNum,
    date: dateStr,
    items: orderedItems,
    total: finalTotal,
    status: "Processing",
    paymentMethod: payName,
    shippingAddress: APP_STATE.checkoutData.shipping 
      ? `${APP_STATE.checkoutData.shipping.name}, ${APP_STATE.checkoutData.shipping.address}, ${APP_STATE.checkoutData.shipping.city} - ${APP_STATE.checkoutData.shipping.pincode}`
      : "Standard Delivery Address",
    deliverySpeed: APP_STATE.checkoutData.deliverySpeed === "express" ? "Express Priority" : "Standard Delivery"
  };

  APP_STATE.orders.unshift(newOrder);
  saveOrdersToStorage();

  APP_STATE.cart = [];
  saveCartToStorage();

  closeCheckoutModal();

  document.getElementById("confOrderId").textContent = orderNum;
  document.getElementById("confPaymentMethod").textContent = payName;
  document.getElementById("confTotalAmount").textContent = formatINR(finalTotal);
  document.getElementById("confShippingAddress").textContent = newOrder.shippingAddress;

  const estDate = new Date();
  estDate.setDate(estDate.getDate() + (APP_STATE.checkoutData.deliverySpeed === "express" ? 1 : 3));
  document.getElementById("confDeliveryDate").textContent = estDate.toLocaleDateString("en-IN", { weekday: 'long', month: 'short', day: 'numeric' });

  document.getElementById("confirmationBackdrop").classList.add("active");
  document.getElementById("orderConfirmedModal").classList.add("active");
  document.body.style.overflow = "hidden";

  showToast(`Order #${orderNum} placed successfully! 🎉`, "success");
}

function closeOrderConfirmationModal() {
  document.getElementById("confirmationBackdrop").classList.remove("active");
  document.getElementById("orderConfirmedModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function viewMyOrdersAfterCheckout() {
  closeOrderConfirmationModal();
  openOrderHistoryModal();
}

// =============================================================================
// 9. SIMULATED USER AUTHENTICATION & PROFILE
// =============================================================================
function handleAccountClick() {
  if (APP_STATE.user) {
    const menu = document.getElementById("accountDropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  } else {
    openAuthModal();
  }
}

document.addEventListener("click", (e) => {
  if (!e.target.closest("#accountDropdownWrapper")) {
    const menu = document.getElementById("accountDropdownMenu");
    if (menu) menu.style.display = "none";
  }
});

function openAuthModal() {
  document.getElementById("authBackdrop").classList.add("active");
  document.getElementById("authModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAuthModal() {
  document.getElementById("authBackdrop").classList.remove("active");
  document.getElementById("authModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function switchAuthTab(tab) {
  document.getElementById("tabLoginBtn").classList.toggle("active", tab === "login");
  document.getElementById("tabRegisterBtn").classList.toggle("active", tab === "register");

  document.getElementById("loginForm").style.display = tab === "login" ? "block" : "none";
  document.getElementById("registerForm").style.display = tab === "register" ? "block" : "none";
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();

  APP_STATE.user = {
    name: email.split("@")[0].replace(".", " ").toUpperCase(),
    email: email,
    phone: "9876543210",
    stage: "New Parent"
  };

  saveUserToStorage();
  closeAuthModal();
  showToast(`Welcome back, ${APP_STATE.user.name}! 👶`, "success");
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const stage = document.getElementById("regBabyStage").value;

  APP_STATE.user = {
    name: name,
    email: email,
    phone: "9876543210",
    stage: stage
  };

  saveUserToStorage();
  closeAuthModal();
  showToast(`Account created for ${name}! Welcome to BabyCare 🌸`, "success");
}

function handleUserLogout() {
  APP_STATE.user = null;
  saveUserToStorage();
  document.getElementById("accountDropdownMenu").style.display = "none";
  showToast("You have been signed out.", "info");
}

function updateUserUI() {
  const label = document.getElementById("userAccountLabel");
  const avatarBadge = document.getElementById("userAvatarBadge");
  const dropName = document.getElementById("dropdownUserName");
  const dropEmail = document.getElementById("dropdownUserEmail");
  const mobileStatus = document.getElementById("mobileUserStatus");

  if (APP_STATE.user) {
    label.textContent = APP_STATE.user.name.split(" ")[0];
    avatarBadge.innerHTML = `<span style="font-weight:800; font-size:0.8rem; color:var(--primary-pink);">${APP_STATE.user.name.charAt(0)}</span>`;
    dropName.textContent = APP_STATE.user.name;
    dropEmail.textContent = APP_STATE.user.email;

    if (mobileStatus) {
      mobileStatus.innerHTML = `
        <div>
          <strong>Hello, ${APP_STATE.user.name.split(" ")[0]}!</strong>
          <small style="display:block; color:var(--text-muted);">${APP_STATE.user.stage || 'Parent'}</small>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="handleUserLogout()">Sign Out</button>
      `;
    }
  } else {
    label.textContent = "Sign In";
    avatarBadge.innerHTML = `<i class="fa-regular fa-user"></i>`;
    if (mobileStatus) {
      mobileStatus.innerHTML = `
        <div>
          <strong>Welcome Parent!</strong>
          <small style="display:block; color:var(--text-muted);">Sign in to access your registry & orders</small>
        </div>
        <button class="btn btn-primary btn-sm" onclick="closeMobileMenu(); openAuthModal();">Sign In</button>
      `;
    }
  }
}

// =============================================================================
// 10. ORDER HISTORY & ORDER TRACKER
// =============================================================================
function openOrderHistoryModal() {
  const container = document.getElementById("ordersListBody");

  if (APP_STATE.orders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px;">
        <div style="font-size:3rem; margin-bottom:10px;">📦</div>
        <h4>No Orders Placed Yet</h4>
        <p style="color:var(--text-muted);">When you complete a simulated order, it will appear here.</p>
      </div>
    `;
  } else {
    container.innerHTML = APP_STATE.orders.map(order => `
      <div class="order-history-card">
        <div class="order-history-header">
          <div>
            <strong>Order #${order.orderId}</strong>
            <small style="display:block; color:var(--text-muted);">${order.date} &bull; ${order.paymentMethod}</small>
          </div>
          <span class="order-status-pill ${order.status.toLowerCase()}">${order.status}</span>
        </div>
        <div class="order-history-items">
          ${order.items.map(i => `${i.qty}x ${i.name}`).join(", ")}
        </div>
        <div class="order-history-footer">
          <div><strong>Total:</strong> <span class="text-pink font-bold">${formatINR(order.total)}</span></div>
          <button class="btn btn-secondary btn-sm" onclick="closeOrderHistoryModal(); openOrderTrackingModal('${order.orderId}')">
            <i class="fa-solid fa-truck"></i> Track Package
          </button>
        </div>
      </div>
    `).join("");
  }

  document.getElementById("ordersBackdrop").classList.add("active");
  document.getElementById("ordersModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeOrderHistoryModal() {
  document.getElementById("ordersBackdrop").classList.remove("active");
  document.getElementById("ordersModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function openOrderTrackingModal(orderId) {
  if (orderId) {
    document.getElementById("trackOrderInput").value = orderId;
    trackOrderById(orderId);
  } else if (APP_STATE.orders.length > 0) {
    document.getElementById("trackOrderInput").value = APP_STATE.orders[0].orderId;
    trackOrderById(APP_STATE.orders[0].orderId);
  } else {
    document.getElementById("trackingResultBox").innerHTML = `
      <p style="color:var(--text-muted); text-align:center; padding: 20px;">
        Enter any simulated Order ID (e.g. BC-81204 or your confirmed order) to track package milestones.
      </p>
    `;
  }

  document.getElementById("trackingBackdrop").classList.add("active");
  document.getElementById("trackingModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeOrderTrackingModal() {
  document.getElementById("trackingBackdrop").classList.remove("active");
  document.getElementById("trackingModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function trackOrderById(targetId) {
  const id = targetId || document.getElementById("trackOrderInput").value.trim().toUpperCase();
  const box = document.getElementById("trackingResultBox");

  const order = APP_STATE.orders.find(o => o.orderId.toUpperCase() === id) || {
    orderId: id || "BC-98214",
    date: "2026-10-22",
    total: 1499,
    status: "Shipped",
    shippingAddress: "Bandra West, Mumbai 400050",
    deliverySpeed: "Standard Express"
  };

  box.innerHTML = `
    <div style="background:#ffffff; border-radius:12px; padding:20px; border:1px solid var(--primary-pink-border); margin-top:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <div>
          <h4 style="font-size:1.1rem; margin-bottom:2px;">Package Status: <span class="text-pink">${order.status}</span></h4>
          <small style="color:var(--text-muted);">Tracking: ${order.orderId} &bull; Carrier: BlueDart BabyExpress</small>
        </div>
        <span class="order-status-pill ${order.status.toLowerCase()}">${order.status}</span>
      </div>

      <div class="order-tracker-stepper">
        <div class="step-point done">
          <div class="point-dot"><i class="fa-solid fa-check"></i></div>
          <span>Ordered</span>
        </div>
        <div class="step-line active"></div>
        <div class="step-point done">
          <div class="point-dot"><i class="fa-solid fa-box"></i></div>
          <span>Packed</span>
        </div>
        <div class="step-line ${order.status === 'Shipped' || order.status === 'Delivered' ? 'active' : ''}"></div>
        <div class="step-point ${order.status === 'Shipped' || order.status === 'Delivered' ? 'active' : ''}">
          <div class="point-dot"><i class="fa-solid fa-truck-fast"></i></div>
          <span>In Transit</span>
        </div>
        <div class="step-line ${order.status === 'Delivered' ? 'active' : ''}"></div>
        <div class="step-point ${order.status === 'Delivered' ? 'active' : ''}">
          <div class="point-dot"><i class="fa-solid fa-house"></i></div>
          <span>Delivered</span>
        </div>
      </div>

      <div style="margin-top:20px; font-size:0.84rem; color:var(--text-muted); background:var(--bg-soft); padding:12px; border-radius:8px;">
        <i class="fa-solid fa-location-arrow text-pink"></i> <strong>Latest Update:</strong> Package processed at Central Mumbai Logistics Hub. Expected delivery tomorrow by 4:00 PM.
      </div>
    </div>
  `;
}

// =============================================================================
// 11. BABY REGISTRY SYSTEM
// =============================================================================
function openRegistryModal() {
  renderRegistryModal();
  document.getElementById("registryBackdrop").classList.add("active");
  document.getElementById("registryModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeRegistryModal() {
  document.getElementById("registryBackdrop").classList.remove("active");
  document.getElementById("registryModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function addToRegistry(productId) {
  const exists = APP_STATE.registry.find(i => i.id === productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (exists) {
    showToast(`"${product ? product.name : 'Item'}" is already in your Baby Registry!`, "info");
  } else {
    APP_STATE.registry.push({ id: productId, reserved: false, by: null });
    saveRegistryToStorage();
    showToast(`Added "${product ? product.name : 'Item'}" to your Baby Registry! 🍼`, "success");
  }
}

function removeFromRegistry(productId) {
  APP_STATE.registry = APP_STATE.registry.filter(i => i.id !== productId);
  saveRegistryToStorage();
  renderRegistryModal();
  showToast("Item removed from registry", "info");
}

function renderRegistryModal() {
  const listEl = document.getElementById("registryItemsList");
  const countEl = document.getElementById("regItemCount");
  const totalValEl = document.getElementById("regTotalValue");

  let totalVal = 0;
  countEl.textContent = APP_STATE.registry.length;

  if (APP_STATE.registry.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center; padding: 30px;">
        <div style="font-size:3rem; margin-bottom:8px;">🎁</div>
        <h4>Your Registry is Empty</h4>
        <p style="color:var(--text-muted);">Click "Add to Registry" on any product card or quick view modal.</p>
      </div>
    `;
    totalValEl.textContent = "₹0";
    return;
  }

  listEl.innerHTML = APP_STATE.registry.map(item => {
    const product = PRODUCTS_DATA.find(p => p.id === item.id);
    if (!product) return "";
    totalVal += product.price;

    return `
      <div class="cart-item-card" style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f2d8dd;">
        <img src="${encodeURI(product.image)}" alt="${product.name}" class="cart-item-img" onerror="this.src='${IMAGE_FALLBACK_URL}';">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${product.name}</h4>
          <div class="cart-item-price">${formatINR(product.price)}</div>
          <div style="font-size:0.78rem; margin-bottom:8px;">
            ${item.reserved ? `<span class="text-green font-bold"><i class="fa-solid fa-gift"></i> Reserved by ${item.by}</span>` : `<span class="text-muted"><i class="fa-regular fa-clock"></i> Awaiting Gift Giver</span>`}
          </div>
          <div class="cart-item-controls">
            <button class="btn btn-primary btn-sm" onclick="addToCart('${product.id}', 1); closeRegistryModal(); openCartDrawer();">
              <i class="fa-solid fa-bag-shopping"></i> Purchase Gift
            </button>
            <button class="cart-item-remove-btn" onclick="removeFromRegistry('${product.id}')" title="Remove from registry">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  totalValEl.textContent = formatINR(totalVal);
}

function copyRegistryLink() {
  const url = window.location.origin + window.location.pathname + "#registry";
  navigator.clipboard.writeText(url).then(() => {
    showToast("Shareable Baby Registry link copied to clipboard! 📋", "success");
  }).catch(() => {
    showToast("Registry link: " + url, "info");
  });
}

function openPromoBundleModal() {
  addToCart("prod-06", 1, false);
  showToast("New Parent Starter Bundle added with 30% savings! 🍼", "success");
  openCartDrawer();
}

// =============================================================================
// 12. CONTACT FORM & NEWSLETTER SUBSCRIPTION
// =============================================================================
function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !phone || !message) {
    showToast("Please fill all required fields.", "error");
    return;
  }

  document.getElementById("contactForm").reset();
  showToast(`Thank you, ${name}! A parenting care specialist will contact you shortly.`, "success");
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput.value.trim();

  if (!email || !email.includes("@")) {
    showToast("Please enter a valid email address.", "error");
    return;
  }

  emailInput.value = "";
  showToast("Subscribed! Your ₹200 welcome coupon code is FIRSTBABY 🎉", "success");

  if (APP_STATE.cart.length > 0) {
    APP_STATE.activeCoupon = { code: "FIRSTBABY", discountPercent: 0, discountFlat: 200 };
    renderCartDrawer();
  }
}

// =============================================================================
// 13. INFORMATIONAL MODALS
// =============================================================================
function openPrivacyModal() {
  openInfoModal(
    "Privacy Policy",
    `<p>At BabyCare, your family's safety and privacy are paramount. We do not sell or trade customer personal data. All information submitted in this frontend demonstration is kept purely within your local browser's storage.</p><p class="mt-3">For questions regarding our simulated privacy safeguards, please reach out to care@babycare-india.com.</p>`
  );
}

function openTermsModal() {
  openInfoModal(
    "Terms of Service",
    `<p>Welcome to BabyCare. By browsing this website, you understand and acknowledge that this website is an interactive e-commerce educational demonstration. No financial transactions, debit/credit card charges, or actual logistics dispatches are processed.</p><p class="mt-3">All product names, trademarks, and sample images remain the property of their respective creators.</p>`
  );
}

function openShippingModal() {
  openInfoModal(
    "Shipping & Returns Policy",
    `<p>We offer simulated FREE Express Delivery on all orders over ₹999 across India. Standard orders are dispatched within 24 hours.</p><p class="mt-3"><strong>Easy 30-Day Returns:</strong> If you are dissatisfied with product sizing, quality, or fit, our simulated returns portal facilitates doorstep reverse pick-ups at no charge.</p>`
  );
}

function openInfoModal(title, htmlContent) {
  const content = document.getElementById("infoModalContent");
  content.innerHTML = `
    <h3 style="font-family:var(--font-heading); font-size:1.6rem; font-weight:800; margin-bottom:14px;">${title}</h3>
    <div style="font-size:0.95rem; color:var(--text-muted); line-height:1.6;">${htmlContent}</div>
    <div style="margin-top:24px; text-align:right;">
      <button class="btn btn-primary" onclick="closeInfoModal()">Close</button>
    </div>
  `;
  document.getElementById("infoBackdrop").classList.add("active");
  document.getElementById("infoModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeInfoModal() {
  document.getElementById("infoBackdrop").classList.remove("active");
  document.getElementById("infoModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

// =============================================================================
// 14. TOAST NOTIFICATION UTILITY
// =============================================================================
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "error") icon = "fa-triangle-exclamation";

  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-icon"></i>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// =============================================================================
// 15. UI HELPERS & MOBILE MENU CONTROLS
// =============================================================================
function updateHeaderBadges() {
  const cartBadge = document.getElementById("cartCountBadge");
  const wishBadge = document.getElementById("wishlistCountBadge");

  let totalCartCount = 0;
  APP_STATE.cart.forEach(item => totalCartCount += item.quantity);

  if (cartBadge) cartBadge.textContent = totalCartCount;
  if (wishBadge) wishBadge.textContent = APP_STATE.wishlist.length;
}

function closeAnnouncementBar() {
  const bar = document.getElementById("announcementBar");
  if (bar) bar.style.display = "none";
}

function scrollToShop() {
  const shopEl = document.getElementById("shop");
  if (shopEl) {
    shopEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function navigateToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function handleNavClick(target) {
  if (target === "home") {
    navigateToSection("home");
  } else {
    filterByCategory(target);
  }
}

function scrollCategoryNav(amount) {
  const nav = document.getElementById("desktopNavLinks");
  if (nav) {
    nav.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(updateNavScrollArrows, 320);
  }
}

function updateNavScrollArrows() {
  const nav = document.getElementById("desktopNavLinks");
  const leftBtn = document.getElementById("navScrollLeft");
  const rightBtn = document.getElementById("navScrollRight");
  if (!nav || !leftBtn || !rightBtn) return;

  const hasOverflow = nav.scrollWidth > nav.clientWidth + 4;
  if (!hasOverflow) {
    leftBtn.style.display = "none";
    rightBtn.style.display = "none";
    return;
  }

  leftBtn.style.display = nav.scrollLeft > 8 ? "flex" : "none";
  rightBtn.style.display = (nav.scrollLeft + nav.clientWidth < nav.scrollWidth - 8) ? "flex" : "none";
}

// Mobile Menu Drawer
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileDrawer = document.getElementById("mobileDrawer");
const mobileOverlay = document.getElementById("mobileDrawerOverlay");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileDrawer.classList.add("active");
    mobileOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

function closeMobileMenu() {
  if (mobileDrawer) mobileDrawer.classList.remove("active");
  if (mobileOverlay) mobileOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

function handleMobileNavClick(section, cat = null) {
  closeMobileMenu();
  if (cat) {
    filterByCategory(cat);
  } else {
    navigateToSection(section);
  }
}

// Sticky Header Box Shadow on Scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("siteHeader");
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
});

// ESC Key listener to close modals
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductModal();
    closeCartDrawer();
    closeWishlistDrawer();
    closeCheckoutModal();
    closeAuthModal();
    closeOrderHistoryModal();
    closeOrderTrackingModal();
    closeRegistryModal();
    closeInfoModal();
    closeMobileMenu();
  }
});

// =============================================================================
// 16. APPLICATION INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  applyFiltersAndSort();
  updateHeaderBadges();
  updateUserUI();

  const totals = calculateCartTotals();
  updateShippingMeter(totals.subtotal, totals.amountNeededForFreeShipping);

  // Setup desktop category navigation scroll listeners
  const desktopNav = document.getElementById("desktopNavLinks");
  if (desktopNav) {
    desktopNav.scrollLeft = 0;
    desktopNav.addEventListener("scroll", updateNavScrollArrows, { passive: true });
    window.addEventListener("resize", () => {
      updateNavScrollArrows();
    });
    setTimeout(() => {
      desktopNav.scrollLeft = 0;
      updateNavScrollArrows();
    }, 100);
  }

  console.log("🍼 BabyCare initialized with all 26 workspace folder products across 5 directories.");
});
