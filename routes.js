(function () {
    function routing(app) {
        var path = require('path');
        var cors = require('cors');
        var bodyParser = require('body-parser');
        var client_directory = __dirname;
        var api = require('./src-private/api/api');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        mapStaticFolder("dist/assets", app, client_directory);
        app.use(cors());        
        // Set dist folder as output folder
        app.use(require('express').static(path.join(__dirname, 'dist')));

        // API file for interacting with MongoDB
        app.use('/api', api);

        // Send all other requests to the Angular app
        app.get('*', cors(), (req, res) => {
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

    // Google Map API Key = "AIzaSyBoO7rCO5c3z2CDAOcLiTf57oESEKs_DiM"
    // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBoO7rCO5c3z2CDAOcLiTf57oESEKs_DiM
    exports.routing = routing;
})();