
Ext.define('App.view.schedule.Uploadform',{
    extend: 'Ext.form.Panel',

    xtype:'schedule_upload_form',

    requires: [
        'App.view.schedule.MainController',
        'App.view.schedule.MainModel',
    ],

    controller: 'schedule-main',
    viewModel: {
        type: 'schedule-main'
    },

    margin : '10',
    
    title: 'Upload Form',

    frame: true,

    resizable: true,

    bodyPadding: 10,
    
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    items : [
        {
            xtype: 'datefield',
            name: 'release_date',
            fieldLabel: 'Release Date',
            allowBlank: false,
            bind: {
                value: '{model.release_date}'
            },
            format: 'Y-m-d',
            emptyText:'yyyy-mm-dd'
        },{
            xtype: 'datefield',
            name: 'effective_date',
            fieldLabel: 'Effective Date',
            allowBlank: false,
            bind: {
                value: '{model.effective_date}'
            },
            format: 'Y-m-d',
            emptyText:'yyyy-mm-dd'
        },{
            xtype: 'datefield',
            name: 'end_effective_date',
            fieldLabel: 'End Effective Date',
            bind: {
                value: '{model.end_effective_date}'
            },
            format: 'Y-m-d',
            emptyText:'yyyy-mm-dd'
        },
        {
            xtype: 'filefield',
            allowBlank: false,
            name: 'file',
            fieldLabel: 'Schedule .csv',
            labelWidth: 100,
            msgTarget: 'side',
            allowBlank: false,
            anchor: '100%',
            buttonText: 'Select Schedule (.csv file)...'
        }
    ],

    buttons : [{
            xtype: 'button',
            text : 'upload',
            name: 'btn_save',
            disabled:true,
            formBind: true,
            listeners: {
                click: 'onSendFile'
            }    
        },
    ],

});
