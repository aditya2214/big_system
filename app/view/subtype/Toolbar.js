Ext.define("App.view.subtype.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    
    xtype : 'subtype_toolbar',

    frame:true,

    items: [
        {
            xtype:'button',
            // iconAlign : 'top',
            icon : 'resources/add-circle-green-16.png',
            cls: 'btn-sync btn-success',
            text : 'ADD',
            bind:{
                // iconCls: '{btn_sync.icon}',
                text: '{btn_sync.text}'
            },
            tooltip: 'Click to Sync Data',
            listeners: {
                click: 'onAddClick'
            }
        },
    ]
        
});