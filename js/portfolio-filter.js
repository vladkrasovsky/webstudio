(() => {
  const ACTIVE_ITEM = 'filter__item--current';

  const refs = {
    filter: document.querySelector('.js-portfolio-filter'),
    items: document.querySelectorAll('.js-portfolio-list > li'),
  };

  refs.filter.addEventListener('click', handleFilterClick);

  function handleFilterClick({ target: btn }) {
    if (btn.nodeName !== 'BUTTON') return;

    const activeBtn = refs.filter.querySelector(`.${ACTIVE_ITEM}`);

    if (activeBtn !== btn.parentNode) {
      activeBtn.classList.remove(ACTIVE_ITEM);
      btn.parentNode.classList.add(ACTIVE_ITEM);
    }

    filter(btn.dataset.target);
  }

  function filter(target) {
    refs.items.forEach(item => {
      const search = target.toLowerCase();
      const isFound = item.dataset.value.toLowerCase() !== search;

      item.style.display = isFound && search !== 'all' ? 'none' : '';
    });
  }
})();
