
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
