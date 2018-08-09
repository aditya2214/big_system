/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('App.Application', {
    extend: 'Ext.app.Application',

    name: 'App',

    quickTips: true,

    requires: [
        'App.util.Config',
        'App.view.login.Login',
        'App.view.main.Main',
    ],

    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
        'Mastermodels',
        'Schedules',
        'Histories',
        'ScheduleMasters',
        'ScheduleDates',
        'Sides',
        'Codes'
    ],

    launch: function () {
        // TODO - Launch the application
        self = this;
        token = App.util.Config.getToken();

        Ext.Ajax.request({
            url: 'http://'+App.util.Config.hostname()+'/big/public/api/auth/me',
            method: 'GET',
            params: {
                token : token
            },
            success: function (response, opts){
                // console.log({response, opts})
                res = JSON.parse(response.responseText);
                // level = res.access_level;

                //set user, for get the specific supplier id
                localStorage.setItem('user', response.responseText );

                // console.log(res)

                Ext.create({
                    xtype: 'app-main'
                });

            },
            failure: function(response, opts) {
                // console.log({response, opts})
                Ext.create({
                    xtype: 'login'
                });
            }
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
