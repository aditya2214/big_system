Ext.define("App.view.model.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    
    xtype : 'main_toolbar',

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
        /*{
            xtype: 'datefield',
            // id: 'forecast_date',
            name : 'trans_date',
            labelPad: 15,
            labelWidth:40,
            style : {
                'font-color' : 'white !important'
            },
            format: 'Y-m-d',          
            allowBlank: true,
            emptyText:'yyyy-mm-dd',
            maxValue : new Date(),
            value: new Date(),
            fieldLabel:'Tanggal',
            listeners: {
                change : 'onTransDateChange'
            }
        },*/
        {
            xtype:'button',
            name : 'btn-danger',
            icon : 'resources/upload_1-16.png',
            // iconCls : 'fa-home',
            text : 'UPLOAD',
            bind: {
                text : '{notif.danger}'
            },
            tooltip: 'Upload Master Model!!',
            listeners: {
                click: 'uploadOnClick'
            }
        },
    ]
        
});