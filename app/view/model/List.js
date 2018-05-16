Ext.define('App.view.model.List', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'model_list',

    /*requires: [
        'App.store.Suppliers'
    ],*/

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },
    //store nya di bind refer ke viewModel.data.stores
    /*bind: {
        store : '{mastermodels}'
    },*/
    store : 'Mastermodels',
    

    // layout : 'fit',
    frame: true,

    style:{
        'border-color': '#D0D0D0'
    },

    columns: [
        {   
            text : 'No',
            width : 60,
            xtype: 'rownumberer'
        },

        // { text: 'ID',  dataIndex: 'id' },
        
        { 
            text: 'Model Name',
            dataIndex: 'name', 
            flex: 1,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_name',
                margin : 4,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },

        { 
            text: 'PWBNO',
            dataIndex: 'pwbno',
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_pwbno',
                margin : 4,
                flex: 1,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                },
                emptyText : 'Searh'
            }]
        },

        { 
            text: 'PWB Name',
            dataIndex: 'pwbname', 
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_pwbname',
                margin : 4,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },

        { 
            text: 'Process',
            dataIndex: 'process',
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_process',
                margin : 4,
                flex: 1,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                },
                emptyText : 'Searh'
            }]
        },

        { 
            text: 'Code',
            dataIndex: 'code',
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_code',
                margin : 4,
                flex: 1,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                },
                emptyText : 'Searh'
            }]
        },
    ],

    bbar: [{
        xtype: 'pagingtoolbar',
        pageSize: 50,
        store : 'Mastermodels',
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true
    }],

});