Ext.define("App.view.schedule.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    
    xtype : 'schedule_toolbar',

    frame:true,

    items: [
        /*{
            xtype:'button',
            // iconAlign : 'top',
            icon : 'resources/add-circle-green-16.png',
            cls: 'btn-sync btn-success',
            name : 'btn-add',
            text : 'ADD',
            bind:{
                // iconCls: '{btn_sync.icon}',
                text: '{btn_sync.text}'
            },
            tooltip: 'Click to Sync Data',
            listeners: {
                click: 'onAddClick'
            }
        },*/
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
            name : 'btn-upload',
            icon : 'resources/upload_1-16.png',
            // iconCls : 'fa-home',
            text : 'UPLOAD',
            tooltip: 'Upload Master Model!!',
            listeners: {
                click: 'uploadOnClick'
            }
        },
        {
            xtype:'button',
            name : 'btn-process',
            icon : 'resources/Play-16.png',
            text : 'PROCESS',
            tooltip: 'Generate Code!!',
            listeners: {
                click: 'processOnClick'
            }
        },{
            xtype: 'textfield',
            labelWidth:70,
            name: 'search_code',
            fieldLabel: 'Search By Code ',
            emptyText : 'Type Code Here ...',
        },{
            xtype:'button',
            name : 'btn-search',
            icon : 'resources/search.png',
            // text : 'Search',
            tooltip: 'Search By Code',
            listeners: {
                click: 'searchCodeOnClick'
            }
        }

    ]
        
});