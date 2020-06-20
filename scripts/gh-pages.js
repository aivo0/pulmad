var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/aivo0.github.io',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/aivo0/aivo0.github.io.git',
        user: {
            name: 'Aivo Olev',
            email: 'aivo.olev@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
