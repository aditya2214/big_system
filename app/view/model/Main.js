
Ext.define('App.view.model.Main',{
    extend: 'Ext.panel.Panel',

    requires: [

        'App.view.model.MainController',
        'App.view.model.MainModel',
        'App.view.model.List',

        'App.view.model.Toolbar',

    ],

    controller: 'model-main',
    viewModel: {
        type: 'model-main'
    },

    xtype:'model_main',

    layout: {
        type:'border'
    },

    title: 'Model Master',

    height : 600,

    frame: true,

    items:[
        {
            xtype: 'main_toolbar',
            region : 'north',
            // height :200
        },
        {
            xtype: 'model_list',
            region : 'center'
        }
    ]
});
