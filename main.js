/* abre e fecha o menu quando clicar no icone: hamburguer e x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/* quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*Testmonials carousel slider swiper*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*ScrollReveal: mostrar elemntos quando der scroll na página*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image,#about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links
footer .brand, footer .social
`,
  { interval: 100 }
)

/* Botão oltar para o topo */
const backTotopButton = document.querySelector('.back-to-top')

function backTotop() {
  if (window.scrollY >= 560) {
    backTotopButton.classList.add('show')
  } else {
    backTotopButton.classList.remove('show')
  }
}

/* menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageY0ff7set + (window.innerHeight / 8) * 4

  for (const section of section) {
    const sectionTop = sectionoffsetTop
    const sectionHeight = sectionoffsetHeight
    const sectionId = section.Attribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('na ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('na ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*When Scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backTotop()
  activateMenuAtCurrentSection()
})
