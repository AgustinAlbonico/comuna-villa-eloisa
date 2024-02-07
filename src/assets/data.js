import PaddleIcon from '../assets/paddle-min.png'

//Links de la navbar
export const navbarData = [
  { name: 'Inicio', path: '/' },
  {
    name: 'Nuestro pueblo',
    path: '/nosotros',
    children: [
      { name: 'Nuestro pueblo', path: '/nosotros' },
      { name: 'En el mundo', path: '/nosotros/world' },
      { name: 'Nuestras fotos', path: '/nosotros/pictures' },
    ],
  },
  {
    name: 'Servicios',
    path: '/servicios',
    children: [
      { name: 'Servicios', path: '/servicios' },
      { name: 'Licencias de conducir', path: '/servicios#licencias' },
      { name: 'Tasas comunales', path: '/servicios#tasas' },
      { name: 'Nuestras fotos', path: '/servicios#vencimientos' },
    ],
  },
  { name: 'Gobierno', path: '/gobierno' },
  { name: 'Contacto', path: '/contacto' },
  { name: 'Noticias', path: '/noticias' },
  { name: 'Ordenanzas', path: '/ordenanzas' },
  {
    name: 'Cancha de padel',
    path: 'https://turnosconqr.com/comuna_villa_eloisa',
    outside: true,
    icon: PaddleIcon,
  },
]
