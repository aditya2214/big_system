Ext.define('App.view.subtype.List', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'subtype_list',

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },
    
    store : 'Subtypes',
    
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
        listeners: {
            cancelEdit: function(rowEditing, context) {
                // Canceling editing of a locally added, unsaved record: remove it
                if (context.record.phantom) {
                    var store = Ext.data.StoreManager.lookup('subtypes');
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
            text: 'subtype name',
            dataIndex: 'name', 
            flex: 4,
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
            text: 'modelname',
            dataIndex: 'modelname', 
            flex: 4,
            align: 'center',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_modelname',
                margin : 4,
                emptyText : 'Search',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },

    ],

    bbar: [{
        xtype: 'pagingtoolbar',
        pageSize: 50,
        store : 'Mastermodels',
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true,
        listeners: {
            beforechange : 'onRefresh'
        },
        items:[{
            iconCls: 'fa fa-download',
            tooltip: 'download data',
            xtype:'button',
            handler: 'onDownload'
        }]
    }],

});