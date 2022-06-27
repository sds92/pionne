function buildCategories(categoriesIds, categories) {
  return categoriesIds.map((item) => categories.find((cat) => cat.id.toString() === item.toString()).name);
}

function buildPrice(tagsIds, tags) {
  return tagsIds.map((item) => tags.find((tag) => tag.id.toString() === item.toString()).name);
}

export const transform = (products, categories, tags) => {
  const res = products.map((item) => ({
    id: item.id,
    categories: buildCategories(item.categories, categories),
    price: buildPrice(item.tags, tags),
    title: item.title.rendered,
    description: item.content.rendered,
  }));
  return res;
};
