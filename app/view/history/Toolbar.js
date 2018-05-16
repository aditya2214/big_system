Ext.define("App.view.history.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    
    xtype : 'history_toolbar',

    frame:true,

    items: [
        
        {
            xtype: 'datefield',
            id: 'release_date',
            name : 'release_date',
            labelPad: 15,
            labelWidth:80,
            style : {
                'font-color' : 'white !important'
            },
            format: 'Y-m-d',          
            allowBlank: true,
            emptyText:'yyyy-mm-dd',
            maxValue : new Date(),
            value: new Date(),
            fieldLabel:'Release Date',
            listeners: {
                change : 'onReleaseDateChange'
            }
        },
        {
            xtype: 'combobox',
            name: 'rev',
            id : 'rev',
            emptyText: 'Select Revision',
            store : 'ScheduleMasters',
            queryMode : 'local',
            labelWidth:50,
            displayField:'rev',
            valueField:'rev',
            fieldLabel: 'Revision',
            listeners:{
                'select' : 'revOnChange'
            },
            allowBlank: false
        },
        /*{
            xtype:'button',
            name : 'btn-process',
            icon : 'resources/Play-16.png',
            text : 'PROCESS',
            tooltip: 'Generate Code!!',
            listeners: {
                click: 'processOnClick'
            }
        },*/
    ]
        
});