
Ext.define('App.view.subtype.CreateForm',{
    extend: 'Ext.form.Panel',

    xtype:'subtype_create_form',

    requires: [
        'App.view.subtype.MainController',
        'App.view.subtype.MainModel',
    ],

    controller: 'subtype-main',
    viewModel: {
        type: 'subtype-main'
    },

    // margin : '10',
    
    // title: 'Upload Form',

    frame: true,

    resizable: true,

    bodyPadding: 10,
    
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    items : [
        {
            name: 'modelname',
            xtype: 'combobox',
            store : 'Mastermodels',
            displayField:'name',
            emptyText : 'modelname',
            valueField: 'id',
            fieldLabel: 'modelname',
            queryParam:'name',
            bind:{
                value: '{model.model_id}',
            },
            // allowBlank: false,
        },
        {
            xtype: 'textfield',
            name: 'part_name',
            fieldLabel: 'Subtype Name',
            emptyText : 'Subtype Name',
            allowBlank: false,
            bind: {
                value : '{model.name}',
            },
        },
    ],

    buttons : [{
            xtype: 'button',
            text : 'submit',
            name: 'btn_save',
            disabled:true,
            formBind: true,
            listeners: {
                click: 'onSubmit'
            }    
        },
    ],

});
