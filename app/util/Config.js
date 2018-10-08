Ext.define('App.util.Config', {
	singleton : true,

    config : {
        debug : true
    },

    constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    
    backendName : "/big24", // it's configurable;

    hostname: function(){
    	/*if ( window.location.hostname == 'localhost'){
		    return 'localhost';
		}else{
            return  window.location.hostname;
        }*/
        return window.location.hostname + this.backendName + "/public/api";
                
 	},
    getUser: function (){
        if (localStorage.getItem('user') != null){
           return  JSON.parse( localStorage.getItem('user') ).id
        }else{
            return null
        }
    },

    getSupplierId : function (){
        if (localStorage.getItem('user') != null){
           return  JSON.parse( localStorage.getItem('user') ).supplier_id;
        }else{
            return null
        }
    },

    getToken : function(){
        // return localStorage.getItem('token');
        if (localStorage.getItem('token') != null){
           return localStorage.getItem('token') ;
        }else{
            return null
        }  
    }

});