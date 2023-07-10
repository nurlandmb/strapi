module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/fetch-img/:name',
     handler: 'fetch-img.fetchImg',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
