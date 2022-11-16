
module.exports = {
    modules: true,
    
    swcMinify: false,
    images: {
        //domains: ['localhost'],
        deviceSizes: [320, 420, 768, 1024, 1200],
        loader: "default",
        domains: ["res.cloudinary.com"],

    },
    env:{
        //API_PATH:"http://localhost:1337",
        API_MAIL_PATH:"https://speedtrack.co.in/api/react/agnelz"
        //API_PATH:"https://pirna-admin.herokuapp.com"
    },
    // Uncomment the line below to enable basePath, pages and
    // redirects will then have a path prefix (`/app` in this case)
    //
    // basePath: '/app',

    async redirects() {
        return [
            {
                source: '/logout',
                destination: '/',
                permanent: true,
            },
            {
                source: '/webmail',
                destination: 'https://webmail.agnelz.in/',
                permanent: true
              }
            
        ]
    },
}