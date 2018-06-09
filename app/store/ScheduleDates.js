Ext.define('App.store.ScheduleDates', {
    extend: 'Ext.data.Store',

    model: 'App.model.ScheduleMaster',

    alias: 'store.schedule_dates',

    // autoLoad: true,

    proxy: {
        type: 'rest',

        enablePaging:true,

        extraParams: {
            token : App.util.Config.getToken() //
        },

        url: 'http://'+App.util.Config.hostname()+'/big/public/api/schedules/dates',
        
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
});