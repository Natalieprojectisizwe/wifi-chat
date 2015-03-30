require.config({
  baseUrl: 'scripts/lib',
  paths: {
    app: '../app',
    tpl: '../templates'
  },
  map: {
    '*': {
      'app/models/employee': 'app/models/memory/employee'
    }
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  }
})

require(['jquery', 'backbone', 'app/router'], function ($, Backbone, router) {

  localStorage.andlogKey = 'wifiDebug'

  $('body').on('click', '.js-back-button', function(event) {
    event.preventDefault()
    window.history.back()
  })
  
  Backbone.history.start()
  
})