function filterBy(criteria) {
  const items = Array.from(document.querySelectorAll('.item'));

  items.sort((a, b) => {
    const getData = (el, attr) => parseFloat(el.dataset[attr]);

    switch(criteria) {
      case 'rating':
        return getData(b, 'rating') - getData(a, 'rating');
      case 'cost-lh':
        return getData(a, 'cost') - getData(b, 'cost');
      case 'cost-hl':
        return getData(b, 'cost') - getData(a, 'cost');
    }
  });

  const container = document.getElementById('items');
  container.innerHTML = ''; // Clear
  items.forEach(item => container.appendChild(item)); // Re-add
}