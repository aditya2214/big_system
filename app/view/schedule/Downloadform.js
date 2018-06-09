
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
            xtype: 'hiddenfield',
            name: 'code_holder',
            
        }
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
