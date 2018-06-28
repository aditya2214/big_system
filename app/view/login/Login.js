Ext.define('App.view.login.Login', {
    extend: 'Ext.window.Window',

    xtype: 'login',

 	requires: [
        'App.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',

    bodyPadding: 10,
    
    title: 'Login Window',
    
    closable: false,
    
    autoShow: true,

    /*bodyStyle: {
        "background-image" : "url(resources/background.jpg) !important",
    },*/

    /*style: { 
        "background-image" : "url(resources/background.jpg) !important",
        "background-color" : 'red !important'
    },*/
    
    /*bodyCls: 'popWindow',*/

    /*styles : {
        'background-image': 'resources/background.jpg'
    },*/

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            enableKeyEvents: true,
            listeners: {
                keyup: 'onEnter'
            },
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});