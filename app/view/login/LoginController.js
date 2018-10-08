
Ext.define('App.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    requires : [
    	'App.util.Config'
    ],

    onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        var email = Ext.ComponentQuery.query('textfield[name=email]')[0];
        var password = Ext.ComponentQuery.query('textfield[name=password]')[0];

        // console.log({
        // 	email: email.value, 
        // 	password: password.value 
        // })

        self = this;

        Ext.Ajax.request({
            url: 'http://'+App.util.Config.hostname()+'/auth/login',
            method: 'POST',
            params: {
            	email   : email.value, 
            	password: password.value 
            },
            success: function (response, opts){
            	
            	// console.log({response, opts})
            	res = JSON.parse(response.responseText);
            	token = res.token;
            	// console.log(res);
		        localStorage.setItem("isLoggedIn", true);
		        localStorage.setItem("token", res.token );

            	// Remove Login Window
		        self.getView().destroy();

		        // Add the main view to the viewport
		        Ext.Ajax.request({
                    url: 'http://'+App.util.Config.hostname()+'/auth/me',
                    method: 'GET',
                    params: {
                        token : token
                    },
                    success: function (response, opts){
                        // console.log({response, opts})
                        // res = JSON.parse(response.responseText);
                        // level = res.access_level;

                        //set user json in localStorage
                        localStorage.setItem('user', response.responseText );

                        // console.log(level) 
                        // Ext.create({
                        //     xtype: 'app-main',

                        //     // access_level : level
                        // });

                        location.reload(); //this reload is to make sure that every store get to proper token
                    },
                    failure: function(response, opts) {
                        console.log({response, opts})
                        
                        Ext.create({
                            xtype: 'login'
                        });
                    }
                });
            },
            failure: function(response, opts) {
		        console.log({response, opts})
                error = JSON.parse(response.responseText).message;
                Ext.Msg.alert('Error', error );
		    }
        });
    },

    onEnter :  function (component, e){
        if (e.keyCode == 13) {
            this.onLoginClick();
        }
    }
});