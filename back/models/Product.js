const products = [
  {
    "colors": ["Camel", "Dark Grey","Light Grey"],
    "_id": "107fb5b75607497b96722bda5b504926",
    "name": "MUTTROS Modular Dog Bed",
    "price": 59,
    "imageUrl": "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/81wdaYxgOML._AC_SL1500_.jpg",
    "description": "MUTTROS Modular Dog Bed, Fluffy Dog Beds for Large Dogs, Calming Dog Sofa for Anxious Dog, Dog Mat for Furniture Protector, Dog Couch, 100% Machine Washable, (XL 45\", Fit Pet <100 lbs",
    "altTxt": "Photo MUTTROS Modular Dog Bed"
  },
  {
    "colors": ["Flannelette Baby Blue","Flannelette Coral Pink","Flannelette Dark Grey","Flannelette Light Blue Elk","Flannelette Navy Blue","Flannelette Purple","Linen Gray","Linen Royal Blue","Linen Sky","Linen Violet"],
    "_id": "415b7cacb65d43b2b5c1ff70f3393ad1",
    "name": "Hollypet Pet Sofa Couch with Storage",
    "price": 139,
    "imageUrl": "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/813qu5IW1WL._AC_SL1500_.jpg",
    "description": "Hollypet Pet Sofa Couch with Storage, Pet Sofa for Cats and Small Dogs, Pet Snuggle Cat Sofa Bed for Indoor Cats, Luxury Mini Dog Couch Sofa Bed with Washable Cushion",
    "altTxt": "Photo Hollypet Pet Sofa Couch with Storage"
  },
  {
    "colors": ["White","Light Yellow","Pink"],
    "_id": "055743915a544fde83cfdfc904935ee7",
    "name": "Fluffy Cat Couch",
    "price": 49,
    "imageUrl": "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/51Fz0KiqwyL._AC_SL1000_.jpg",
    "description": "Pet Couch Bed, Washable Cat Beds for Medium Small Dogs & Cats, Durable Dog Beds with Non-Slip Bottom, Fluffy Cat Couch ",
    "altTxt": "Photo Fluffy Cat Couch"
  },
  {
    "colors": [" Dark Grey", "Grey",],
    "_id": "a557292fe5814ea2b15c6ef4bd73ed83",
    "name": "Orthopedic Waterproof Pet Beds",
    "price": 67,
    "imageUrl": "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/71vCAo-i2vL._AC_SL1500_.jpg",
    "description": "EHEYCIGA Memory Foam Large Dog Bed with Sides, Orthopedic Waterproof Pet Beds for Large Dogs, Washable Big Dog Couch Bed with Removable Cover and Non-Slip Bottom",
    "altTxt": "Photo Orthopedic Waterproof Pet Beds"
  },
  {
    "colors": ["Grey"],
    "_id": "8906dfda133f4c20a9d0e34f18adcf06",
    "name": "PawHut Pet Sofa",
    "price": 104,
    "imageUrl": "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/71cQGgsIk2L._AC_SL1500_.jpg",
    "description": "PawHut Pet Sofa Elevated Dog Bed Raised Cat Couch Puppy Furniture for Small Sized Dogs with Storage Removable Cushion Cover Grey",
    "altTxt": "Photo PawHut Pet Sofa"
  },
  {
    "colors": ["Black"],
    "_id": "77711f0e466b4ddf953f677d30b0efc9",
    "name": "PawHut Adjustable Height Cat",
    "price": 77,
    "imageUrl": "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/81CxOykfOyL._AC_SL1500_.jpg",
    "description": "PawHut Adjustable Height Cat Stairs with Sisal Scratching Posts, Cat House for Cozy Rest, Pet Steps for Couch Sofa and High Bed with Hanging Ball, Front Hole, Jumping Platform",
    "altTxt": "Photo PawHut Adjustable Height Cat"
  },
  {
    "colors": ["Black","Brown","White"],
    "_id": "034707184e8e4eefb46400b5a3774b5f",
    "name": "BabyLand Princess Pet Bed",
    "price": 129,
    "imageUrl": "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/611yE7U5K4S._AC_SL1500_.jpg",
    "description": "BabyLand Princess Pet Bed Diamond Dog Bed Small Pet Furniture PVC Upholstery Cat Bed",
    "altTxt": "Photo BabyLand Princess Pet Bed"
  },
  {
    "colors": ["Pink", "Brown", "Yellow", "White"],
    "_id": "a6ec5b49bd164d7fbe10f37b6363f9fb",
    "name": "WCouch Bed Cat",
    "price": 49,
    "imageUrl": "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/71vhhpDcgcL._AC_SL1500_.jpg",
    "description": "Washable Pet Couch Bed Cat Beds for Cats & Medium Small Dogs Durable Puppy Beds with Non-Slip Bottom Fluffy Cat Couch",
    "altTxt": "Photo Couch Bed Cat"
  }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(products)).find(product =>
      product._id == id)
    )
  );
}




