
Ext.define('App.view.history.History',{
    extend: 'Ext.panel.Panel',

    requires: [
        'App.view.history.HistoryController',
        'App.view.history.HistoryModel',
        'App.view.history.List',
        'App.view.history.Toolbar',

    ],

    xtype:'history_main',

    controller: 'history-history',
    viewModel: {
        type: 'history-history'
    },

    layout: {
        type:'border'
    },

    title: 'Schedule Histories',

    height : 600,

    frame: true,

    items :[
        {
            xtype: 'history_toolbar',
            region : 'north'
        },{
            xtype: 'history_list',
            region : 'center'
        }
    ]
});
