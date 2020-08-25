const settings = {
  "name": "aea",
  "state": {
    "frontity": {
      "url": "http://localhost:8080/testapps/",
      "title": "A Space ",
      "description": "Theme for Aea Space"
    }
  },
  "packages": [
    {
      "name": "theme-3d-artist",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost:8080/testapps/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
