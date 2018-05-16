Ext.define('App.view.schedule.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.schedule-main',

    onAddClick : function (){
    	console.log('onAddClick')
    },

    uploadOnClick : function(){
    	console.log('uploadOnClick')
        Ext.create('Ext.window.Window', {
            // title: 'CHART',
            height: 600,
            width: 1100,
            maximizable : true,
            layout: 'fit',
            modal :true,
            // frame: true,
            items: [{
                xtype : 'schedule_upload_form',
                //set viewModel here
            }]
        }).show();

    },

    onSendFile : function (button){
        // return ;
        var form = button.up('form').getForm();
        // console.log(form)
        // return ;
        if(form.isValid()) {
            form.submit({
                url: 'http://'+App.util.Config.hostname()+'/big/public/api/schedules',
                waitMsg: 'Processing...',
                success: function(fp, o) {
                    Ext.Msg.alert('Success', o.result._meta.upload_status );
                },
                failure: function(fp, o){
                    console.log({
                        fp, o
                    })
                    Ext.Msg.alert('failure', o.result._meta.upload_status );

                }
            });
        }
    },

    processOnClick : function (){
    	console.log('processOnClick')
        let self = this;

        var myMask = new Ext.LoadMask({
            msg    : 'Please wait...',
            target : self.getView()
        });

        myMask.show();

        Ext.Ajax.request({
            url: 'http://'+App.util.Config.hostname()+'/big/public/api/schedule_details/process',
            method: 'POST',
            /*params: {
                token : token
            },*/
            success: function (response, opts){
                console.log('success')
                console.log({
                    response, opts
                })
                myMask.hide();
            },
            failure : function(response, opts){
                console.log('failure')
                console.log({
                    response, opts
                })
                myMask.hide();
            }
        })
    },



});
