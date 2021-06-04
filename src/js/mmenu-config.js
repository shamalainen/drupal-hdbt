document.addEventListener('DOMContentLoaded', () => {
  /* global Mmenu */
  const menu = new Mmenu('#mobile-navigation', {
    lazySubmenus: true,
    extensions: ['pagedim-black'],
    // columns: true,
    setSelected: {
      current: true,
    },
    navbars: [
      {
        position: 'top',
        content: ['searchfield'],
      },
      {
        position: 'top',
        content: ['prev', 'title'],
      },
      {
        position: 'bottom',
        content: [
          '<a class="fa fa-envelope" href="#">Paikka a</a>',
          '<a class="fa fa-twitter" href="#">Juttu b</a>',
          '<a class="fa fa-facebook" href="#">Jotain c</a>',
        ],
      },
    ],
  });

  const burger = document.getElementById('menu-hamburger');

  burger.addEventListener('click', function () {
    let parent = menu.querySelector('.is-active');
    parent.parentNode.querySelector('.mm-btn_next').trigger('click');
  });

  // Get the API
  const api = menu.API;

  // Invoke a method
  const panel = document.querySelector('#mobile-navigation .is-active');
  api.openPanel(panel.parentNode.parentNode);
});
