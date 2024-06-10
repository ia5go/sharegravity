/* GETS ALL THE CARDS */
export async function getData(){
  const res = await fetch('http://localhost:3000/db/db.json');

  if(!res.ok){
    throw new Error(`Error fetching`);
  }

  return res.json();
}

/* GETS A UNIQUE CARD */
export async function getCard(id) {
  // TODO: ADD EXPLANATION ABOUT HOW THIS SHOULD HAVE ACESS TO A ROUTE THAT WORLD BRING ONLY A CARD INSTAD OF GOING THROUGH THE WHOLE CARDS JSON
  const data = await getData();
  return data.find(card => card.id == id);
}

/* FILTERS THE CARDS BY TITLE OR CATEGORY */
export function getFilteredData(items, search) {;
  return items.filter(item => 
    (search && item.category.toLowerCase().includes(search.toLowerCase())) || 
    (search && item.title.toLowerCase().includes(search.toLowerCase()))
  );
}

/* FILTERS EXISTING CATEGORIES */
export function getUniqueCategories(items) {
  const categories = items.map(item => item.category);
  return [...new Set(categories)];
}

/* UPDATES THE RATING OF AN ITEM */
export function updateRating(cardId, newRating) {
  /* NOW THIS ONLY CONSOLES THE ITEMS ID AND THE NEW RATING VALUE.
  I WOULD NEED TO HAVE A BACKEND READY TO GET THE VALUES AND UPDATE IN THE DATABASE. */
  console.log(cardId);
  console.log(newRating);
}