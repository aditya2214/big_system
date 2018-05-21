/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('App.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'App.view.main.MainController',
        'App.view.main.MainModel',
        'App.view.main.List',

        'App.view.model.Main',
        'App.view.schedule.Main',
        'App.view.history.History',


    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        // iconCls: 'fa-th-list'
        icon : 'resources/power.png'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [ {
            title: 'Schedules',
            iconCls: 'fa-calendar',
            items:[{
                xtype: 'schedule_main'
            }]
        },{
            title: 'Models',
            iconCls: 'fa-home',
            // icon: 'resources/pcb-20.png',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'model_main'
            }]
        }, {
            title: 'History',
            iconCls: 'fa-history',
            items: [{
                xtype: 'history_main'
            }]
        }, /*{
            title: 'Settings',
            iconCls: 'fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
    }*/]
});
