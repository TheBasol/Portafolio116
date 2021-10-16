
var titulo = basicScroll.create({
  elem: document.querySelector('.header'),
  from: 'top-top',
  to: 'bottom-top',
  props: {
    '--titulo-pos': {
      from: '0',
      to: '60vh'
    },
      '--texto-pos':{
        from: '0',
        to: '60vh'
    }
  }
});




titulo.start();
