var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
     
      //praktek tugas 2
      {
        path:'/about2/',
        url: 'about2.html'
      },
      {
        path:'/info2/',
        url: 'info2.html'
      },
      {
        path:'/galery/',
        url: 'galery.html'
      },
      {
        path:'/index2/',
        url: 'index2.html'
      }

      
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');