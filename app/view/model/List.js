Ext.define('App.view.model.List', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'model_list',

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },
    
    store : 'Mastermodels',
    
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2
    },

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
            editor: 'textfield',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_name_model',
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
            editor: 'textfield',
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_pwbno_model',
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
            editor: 'textfield',
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_pwbname_model',
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
            editor: 'textfield',
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_process_model',
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
            text: 'cavity',
            dataIndex: 'cavity',
            editor: 'textfield',
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_cavity_model',
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
            text: 'Side',
            dataIndex: 'side',
            editor: {
                xtype: 'combo',
                store: 'Sides',
                emptyText: 'Select Side',
                queryMode : 'local',
                // labelWidth:50,
                displayField:'name',
                valueField:'name',
            },
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_side_model',
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
                name: 'search_by_code_model',
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