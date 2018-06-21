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
        clicksToEdit: 2,
        listeners: {
            cancelEdit: function(rowEditing, context) {
                // Canceling editing of a locally added, unsaved record: remove it
                if (context.record.phantom) {
                    var store = Ext.data.StoreManager.lookup('Mastermodels');
                    store.remove(context.record);
                }
            }
        }
    },

    frame: true,

    style:{
        'border-color': '#D0D0D0'
    },

    columns: [
        {   
            text : 'No',
            width : 60,
            xtype: 'rownumberer',
            align: 'center',
        },

        {
            xtype: 'actioncolumn',
            tooltip: 'Delete Model',
            width: 30,
            align: 'center',
            items:[{
                // iconCls: 'x-fa fa-download',
                icon : 'resources/delete.png',
                tooltip: 'Delete',
                handler: 'onDelete',
            },]
        },

        {
            xtype: 'actioncolumn',
            tooltip: 'Information',
            width: 30,
            align: 'center',
            items:[{
                icon : 'resources/info.png',
                tooltip: 'klik dua kali pada row untuk edit',
                handler : 'infoOnClick'
            }]
        },
        
        { 
            text: 'Model Name',
            dataIndex: 'name', 
            flex: 1,
            editor: 'textfield',
            align: 'center',
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
            align: 'center',
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
            align: 'center',
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
            align: 'center',
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
            align: 'center',
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
            align: 'center',
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
            align: 'center',
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
        displayInfo: true,
        items:[{
            iconCls: 'fa fa-download',
            tooltip: 'download data',
            xtype:'button',
            handler: 'onDownload'
        }]
    }],

});