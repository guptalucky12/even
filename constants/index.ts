export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Customized Event',
      route: '/events/create',
    },
    {
      label: 'My Profile',
      route: '/profile',
    },
    {
      label: 'Contact Us',
      route: '/contact',
    },
    {
      label: 'About Us',
      route: '/about',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }  