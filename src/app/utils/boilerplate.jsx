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
  const data = await getData();
  return data.find(card => card.id == id);
}

/* FILTERS THE CARDS BY TITLE OR CATEGORY */
export function getFilteredData(items, search) {;
  return items.filter(item => 
    (search && item.category === search) || 
    (search && item.title.toLowerCase().includes(search.toLowerCase()))
  );
}

/* FILTERS EXISTING CATEGORIES */
export function getUniqueCategories(items) {
  const categories = items.map(item => item.category);
  return [...new Set(categories)];
}