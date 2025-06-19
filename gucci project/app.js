window.addEventListener('scroll', function () {
    const bodyLogo = document.getElementById('body-logo');
    const navLogo = document.getElementById('nav-logo');
    const a = document.getElementById('box1');
    const bigimg = document.getElementById('bigimg')


    const scrollPosition = window.scrollY;
    if (window.scrollY > 10) {

      bodyLogo.style.zIndex = '99'
      bodyLogo.style.transition = '0.5s'
      bodyLogo.style.fontSize = '60px'
      bodyLogo.style.position = 'fixed'
      a.style.opacity = 1;
      bodyLogo.style.marginLeft = '32%'
      bigimg.style.marginTop = '50px'

      // a.style.transition = "0.4s"
    } else {
      a.style.opacity = 0;
      bodyLogo.style.fontSize = '450px'
      bodyLogo.style.marginLeft = '10px'
      bigimg.style.margin = '0'


    }
  });
