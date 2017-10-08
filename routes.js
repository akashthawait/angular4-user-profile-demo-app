(function () {
    function routing(app) {
        var path = require('path');
        const bodyParser = require('body-parser');        
        var client_directory = __dirname;
        const api = require('./src-private/api/api');
        
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false}));

        mapStaticFolder("dist/assets", app, client_directory);
      
        // Set dist folder as output folder
        app.use(require('express').static(path.join(__dirname, 'dist')));
        
        // API file for interacting with MongoDB
        app.use('/api', api);
        
        // Send all other requests to the Angular app
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'dist/index.html'));
        });
        
    }
    function mapStaticFolder(folder, app, client_directory, actualFolderName) {
        var staticFileOptions = {
            etag: false,
            cacheControl: false
        };
        if (!actualFolderName) {
            actualFolderName = folder;
        }
        app.use('/' + folder + '/', require('express').static(client_directory + actualFolderName, staticFileOptions));
    }
    exports.routing = routing;
})();