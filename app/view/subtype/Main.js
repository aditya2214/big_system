
Ext.define('App.view.subtype.Main',{
    extend: 'Ext.panel.Panel',

    requires: [

        'App.view.subtype.MainController',
        'App.view.subtype.MainModel',
        'App.view.subtype.List',

        'App.view.subtype.Toolbar',

        'App.view.subtype.CreateForm',
    ],

    controller: 'subtype-main',
    viewModel: {
        type: 'subtype-main'
    },

    xtype:'subtype_main',

    layout: {
        type:'border'
    },

    title: 'Model Master',

    height : 600,

    frame: true,

    items:[
        /*{
            xtype: 'subtype_toolbar',
            region : 'north',
            // height :200
        },*/
        {
            xtype: 'subtype_list',
            region : 'center'
        },
        {
            xtype: 'subtype_create_form',
            region : 'west'
        },
    ]
});
