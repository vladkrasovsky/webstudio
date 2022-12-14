(() => {
  const refs = {
    header: document.querySelector('[data-page-header]'),
    forms: document.querySelectorAll('.js-speaker-form'),
  };

  // padding for fixed header
  setPadding();
  window.addEventListener('resize', setPadding);

  function setPadding() {
    if (refs.header.classList.contains('page-header--fixed')) {
      const { height: headerHeight } = refs.header.getBoundingClientRect();
      document.body.style.paddingTop = `${headerHeight}px`;
    }
  }

  // forms submit handler
  refs.forms.forEach(item =>
    item.addEventListener('submit', e => {
      e.preventDefault();

      const { currentTarget: form } = e;

      new FormData(form).forEach((value, name) => {
        console.log(`${name}: ${value}`);
      });

      form.reset();
    })
  );
})();
