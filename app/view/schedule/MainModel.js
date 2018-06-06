Ext.define('App.view.schedule.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.schedule-main',
    data: {
        name: 'App',

        model: {
        	release_date: Ext.Date.toString().split('T')[0] ,
        	effective_date: Ext.Date.toString().split('T')[0],
        	end_effective_date: Ext.Date.toString().split('T')[0],
        }
    }

});
