Ext.define('App.view.schedule.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.schedule-main',

    onAddClick : function (){
    	console.log('onAddClick')
    },

    uploadOnClick : function(){
    	console.log('uploadOnClick')
        var form;
        if (form == undefined ) {
            form = Ext.create('Ext.window.Window', {
                title: 'Upload Form',
                height: 300,
                width: 600,
                maximizable : true,
                layout: 'fit',
                modal :true,
                // frame: true,
                items: [{
                    xtype : 'schedule_upload_form',
                    //set viewModel here
                }]
            })    
        }
        form.show();
    },

    onSendFile : function (button){
        // return ;
        var form = button.up('form').getForm();
        // console.log(form)
        // return ;
        if(form.isValid()) {
            form.submit({
                url: 'http://'+App.util.Config.hostname()+'/schedule_details/upload',
                waitMsg: 'Processing...',
                success: function(fp, o) {
                    console.log({
                        fp, o
                    })
                    Ext.Msg.alert('Success', o.result.message );
                    Ext.getStore('Schedules').load();
                },
                failure: function(fp, o){
                    console.log({
                        fp, o
                    })

                    if (o.result.error) {
                        var message = o.result.error.message 
                        + '.<br> please screenshot & Call IT Team if you need help';
                        Ext.Msg.alert('failure', message );
                    }

                }
            });
        }
    },

    processOnClick (){
        console.log('processOnClick')
        Ext.Ajax.request({
            url: 'http://'+App.util.Config.hostname()+'/schedule_details/preprocess',
            method: 'GET',
            success: function (response, opts){

                var result = JSON.parse(response.responseText);
                // console.log(result)
                // jika belum digenerate baru.
                if (!result.is_generated) {
                    var form;
                    if (form == undefined ) {
                        form = Ext.create('Ext.window.Window', {
                            title: 'Process Form',
                            height: 300,
                            width: 400,
                            maximizable : true,
                            layout: 'fit',
                            modal :true,
                            // frame: true,
                            items: [{
                                xtype : 'schedule_process_form',
                                margin: '0',
                                //set viewModel here
                            }]
                        }).show();
                    }
                    form.show();
                }else{
                    Ext.Msg.alert('Info', result.message)
                }
                
            },
            failure : function(response, opts){
                console.log('failure')
                console.log({
                    response, opts
                })
                
                Ext.Msg.alert('Info', 'Upps!! something went wrong.' );

                
            }
        })
    },

    processOnClickObsolette : function (){
    	console.log('processOnClick')
        let self = this;

        var myMask = new Ext.LoadMask({
            msg    : 'Please wait...',
            target : self.getView()
        });

        myMask.show();

        Ext.Ajax.request({
            url: 'http://'+App.util.Config.hostname()+'/schedule_details/process',
            method: 'POST',
            /*params: {
                token : token
            },*/
            success: function (response, opts){
                console.log('success')
                console.log({
                    response, opts
                })
                Ext.getStore('Schedules').load();
                myMask.hide();
            },
            failure : function(response, opts){
                console.log('failure')
                console.log({
                    response, opts
                })

                Ext.Msg.alert('Info', 'Upps!! something went wrong.' );

                myMask.hide();
            }
        })
    },

    getElement : function (){
        return {
            search_by_name : Ext.ComponentQuery.query('textfield[name=search_by_name]')[0],
            search_by_ynumber: Ext.ComponentQuery.query('textfield[name=search_by_ynumber]')[0],
            search_by_pwbno  : Ext.ComponentQuery.query('textfield[name=search_by_pwbno]')[0],
            search_by_pwbname : Ext.ComponentQuery.query('textfield[name=search_by_pwbname]')[0],
            search_by_process : Ext.ComponentQuery.query('textfield[name=search_by_process]')[0],
            search_by_qty : Ext.ComponentQuery.query('textfield[name=search_by_qty]')[0],
            search_by_prod_no : Ext.ComponentQuery.query('textfield[name=search_by_prod_no]')[0],
            search_by_rev_date : Ext.ComponentQuery.query('textfield[name=search_by_rev_date]')[0],
            search_by_line : Ext.ComponentQuery.query('textfield[name=search_by_line]')[0],
            search_by_lot_size : Ext.ComponentQuery.query('textfield[name=search_by_lot_size]')[0],
            search_by_seq_start : Ext.ComponentQuery.query('textfield[name=search_by_seq_start]')[0],
            search_by_seq_end : Ext.ComponentQuery.query('textfield[name=search_by_seq_end]')[0],
            search_by_start_serial : Ext.ComponentQuery.query('textfield[name=search_by_start_serial]')[0],
            search_by_start_serial : Ext.ComponentQuery.query('textfield[name=search_by_side_model]')[0],
        }
    },

    clearSearchParameter(){
        elements = this.getElement();
        for (index in elements ){
            elements[index].setValue('')
        }
    },

    getElementValue : function (){
        var elements = this.getElement();

        var elementsValue = {
            ynumber: elements.search_by_ynumber.value,
            model: elements.search_by_name.value,
            pwbno: elements.search_by_pwbno.value,
            pwbname: elements.search_by_pwbname.value,
            process: elements.search_by_process.value,
            qty : elements.search_by_qty.value,
            prod_no : elements.search_by_prod_no.value,
            rev_date : elements.search_by_rev_date.value,
            line : elements.search_by_line.value,
            lot_size : elements.search_by_lot_size.value,
            seq_start : elements.search_by_seq_start.value,
            seq_end : elements.search_by_seq_end.value,
            start_serial : elements.search_by_start_serial.value,

        }

        // return elementsValue;

        let result = {}
        var key;
        for (key in elementsValue){
            if (elementsValue[key] != '' && elementsValue[key] != null  ) {
                result[key] = elementsValue[key]
            }
        }

        return result;
    },

    onSearch : function (component, e){
        if (e.keyCode == 13) {
            store = Ext.getStore('Schedules') //this.getViewModel().getStore('tools');
            self = this;
            params = this.getElementValue();
            
            console.log({
                store,
                params
            })

            store.load({
                params: params,
                callback: function(records,operation,success){
                    console.log({
                        records, operation, success
                    })
                    /*if(model != null){
                        
                    }else{
                        const message = 'Tool Number not found!<br>please recheck for typo or kindly contact JEIN for support';
                        Ext.Msg.alert('Info', message );
                        element.no.focus();
                        return;
                    }*/
                }
            })
            
        }
    },

    onProcessSubmit(button){
        let self = this;

        var myMask = new Ext.LoadMask({
            msg    : 'Please wait...',
            target : self.getView(),
            hideAnimation: 'fadeOut',
        });
        
        myMask.show();

        var param = button.up('form').getForm().getValues();
        Ext.Ajax.request({
            url: 'http://'+App.util.Config.hostname()+'/schedule_details/process',
            params: param,
            method: 'POST',
            success: function (response, opts){
                console.log({response, opts});
                Ext.Msg.alert('Success', 'Great!!');
            },
            failure(response, opts){
                console.log({
                    response, opts
                })
                Ext.Msg.alert('Error!', 'Something Went Wrong');
            },
            callback(){
                myMask.hide();
            }
        })
    },

    searchCodeOnClick(button){
        var code = button.previousSibling('textfield[name=search_code]').value;
        var store= Ext.getStore('Schedules');

        if (code != '') {
            store.load({
                params: {
                    code : code
                }
            })
        }   
    },

    searchCodeOnEnter(component, e){
        if (e.keyCode == 13) {
            var button = component.nextSibling('button[name=btn-search]')
            console.log({component, button})
            if (button != undefined) {
                button.click();
            }
        }
    },

    onRefresh(paggingtoolbar, page, opts){
        /*console.log({
            paggingtoolbar,
            page,
            opts
        })*/

        var code = Ext.getCmp('search_code');
        code.setValue('');
        this.clearSearchParameter()
    },

    showDownloadForm(grid, rowIndex, colIndex ){
        // console.log('show download form triggered')
        var record = grid.getStore().getAt(rowIndex);
        var data = record.data;

        var form;
        if (form == undefined ) {
            form = Ext.create('Ext.window.Window', {
                title: 'Download Form',
                height: 250,
                width: 400,
                maximizable : true,
                layout: 'fit',
                modal :true,
                // frame: true,
                items: [{
                    xtype : 'schedule_download_form',
                    //set viewModel here
                }]
            })    
        }
        
        //form == Ext.window.Window
        let childform = form.getComponent(0);        
        let hiddenTextfield = childform.getComponent(1) //karena si hiddenfield ini ada di index 1 dari form.
        //setup id into hidden field  
        hiddenTextfield.setValue(data.id);

        form.show();
    },

    scheduleDownload(button) {
        var form = button.up('form');
        var hiddenfield = form.getComponent(1);
        var id = hiddenfield.value;
        var generatedType = form.getComponent(0).value;
        var values = form.getValues();

        // console.log({
        //     form,
        //     hiddenfield,
        //     id,
        //     generatedType,
        //     values
        // })

        // return;

        self = this;
        let param = {
            generated_type  : generatedType
        }
        if (values.regenerate != undefined) {
            param.regenerate = 'true'
        }

        param = this.serializeObj(param)

        url = 'http://'+App.util.Config.hostname()+'/schedule_details/download/' + id + '?'+ param
        
        // kirim ajax untuk cek tidak ada error
        Ext.Ajax.request({
            url: url,
            method: 'GET',  
            success(response, opts){
                // url = opts.getUrl()
                console.log({
                    response,
                    opts,
                    url
                })

                window.open(url, '_blank')
            },
            failure(response, opts){
                console.log({
                    response,
                    opts
                })
                var responseText = JSON.parse(response.responseText)
                Ext.Msg.alert('Error', responseText.message )
            }
        });
    },

    serializeObj(obj, prefix) {
      //{a:1,b:2}
      //return (Ext.os.is.Android ? encodeURIComponent(JSON.stringify(params)) : params)
      var str = [], p;
      for(p in obj) {
        if (obj.hasOwnProperty(p)) {
          var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
          str.push((v !== null && typeof v === "object") ?
            this.serializeObj(v, k) :
            encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
      }
      return str.join("&");
    },

    onDownload(){
        let url = 'http://localhost/big/public/api/schedule_details/download';
        window.open(url, '_blank');
    }

});
