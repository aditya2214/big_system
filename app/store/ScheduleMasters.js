Ext.define('App.store.ScheduleMasters', {
    extend: 'Ext.data.Store',

    model: 'App.model.ScheduleMaster',

    alias: 'store.schedule_masters',

    // autoLoad: true,

    proxy: {
        type: 'rest',

        enablePaging:true,

        extraParams: {
            token : App.util.Config.getToken() //
        },

        url: 'http://'+App.util.Config.hostname()+'/schedules',
        
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    onCreateRecords: function(record, opt, success){
        // console.log({record,opt,  success})
        if (success) {
            Ext.Msg.alert('Success', 'Date Saved!');
        }else{
            var response = opt.error.response.responseText;
            response = JSON.parse(response);
            error = response.error.message;
            Ext.Msg.alert('Error', error );
        }
    }
});