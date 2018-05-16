
Ext.define('App.view.model.Uploadform',{
    extend: 'Ext.form.Panel',

    xtype:'model_upload_form',

    requires: [
        'App.view.model.MainController',
        'App.view.model.MainModel',
    ],

    controller: 'model-main',
    viewModel: {
        type: 'model-main'
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
            xtype: 'filefield',
            name: 'file',
            fieldLabel: 'Model .csv',
            labelWidth: 100,
            msgTarget: 'side',
            allowBlank: false,
            anchor: '100%',
            buttonText: 'Select Model (.csv file)...'
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
