
Ext.define('App.view.schedule.Main',{
    extend: 'Ext.panel.Panel',

    requires: [
        'App.view.schedule.MainController',
        'App.view.schedule.MainModel',

        'App.view.schedule.Toolbar',
        'App.view.schedule.List',
        'App.view.schedule.Uploadform',
        'App.view.schedule.ProcessForm',

    ],

    controller: 'schedule-main',
    viewModel: {
        type: 'schedule-main'
    },

    xtype:'schedule_main',

    layout: {
        type:'border'
    },

    title: 'Schedule Master',

    height : 600,

    frame: true,

    items :[
        {
            xtype : 'schedule_toolbar',
            region : 'north'
        },
        {
            xtype:'schedule_list',
            region : 'center'
        }
    ]
});
