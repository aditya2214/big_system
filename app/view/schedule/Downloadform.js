
Ext.define('App.view.schedule.Downloadform',{
    extend: 'Ext.form.Panel',

    xtype:'schedule_download_form',

    requires: [
        'App.view.schedule.MainController',
        'App.view.schedule.MainModel',
    ],

    controller: 'schedule-main',

    viewModel: {
        type: 'schedule-main'
    },

    // margin : '10',
    
    // title: 'Upload Form',

    // frame: true,

    resizable: true,

    bodyPadding: 10,
    
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    items : [
        {
            xtype: 'combobox',
            allowBlank: false,
            name: 'generated_type',
            fieldLabel: 'Download',
            labelWidth: 75,
            store : 'Codes',
            valueField: 'name',
            allowBlank: false,
            emptyText: 'Select Side',
            queryMode : 'local',
            displayField:'name',
            valueField:'name',
        },
        {
            // this should always be in here. (in index 1)
            xtype: 'hiddenfield',
            name: 'code_holder',
        },
        {
            xtype     : 'checkbox',
            margin    : '0 0 0 80',
            boxLabel  : 'Regenerate ??',
            name      : 'regenerate',
            inputValue: true,
            id        : 'regenerate',
        },
    ],

    buttons : [{
            xtype: 'button',
            text : 'Download',
            name: 'btn_download',
            disabled:true,
            formBind: true,
            listeners: {
                click: 'scheduleDownload'
            }    
        },
    ],

});
