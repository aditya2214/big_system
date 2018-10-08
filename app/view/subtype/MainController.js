Ext.define('App.view.subtype.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.subtype-main',

    onAddClick : function (){
        console.log('uploadOnClick')
        Ext.create('Ext.window.Window', {
            title: 'Model Upload Form',
            height: 300,
            width: 600,
            maximizable : true,
            layout: 'fit',
            modal :true,
            // frame: true,
            items: [{
                xtype : 'subtype_create_form',
                //set viewModel here
            }]
        }).show();
    },

    onSubmit(){
        let viewModel = this.getViewModel()
        let newSubtype = viewModel.getData().model;
        let store = Ext.getStore('Subtypes');
        
        newSubtype = new App.model.Subtype(newSubtype)

        console.log({newSubtype, store})
        
        // store.setAutoSync(false);
        
        store.add( newSubtype );
        // store.sync()
        // store.setAutoSync(true);
        viewModel.setData({model : {
            model_id : null,
            name     : null,
        }})
    },

    onAddClickBackup : function (button, event){
    	//buat model baru
        let store = Ext.getStore('Subtypes');
        let main = this.getView(); //MainView
        let grid = Ext.ComponentQuery.query('subtype_list')[0]; //cari xtype = model_list
        let rowediting = grid.getPlugin();

        store.setAutoSync(false);

        var record = Ext.create('App.model.Subtype', {
            name : '',
            modelname:'',
            model_id : '',

        });
        //input ke store
        store.insert(0, record);
        rowediting.startEdit(record, 0);
        store.setAutoSync(true);
        //save

    },

    uploadOnClick : function(){
    	console.log('uploadOnClick')
        Ext.create('Ext.window.Window', {
            title: 'Model Upload Form',
            height: 300,
            width: 600,
            maximizable : true,
            layout: 'fit',
            modal :true,
            // frame: true,
            items: [{
                xtype : 'model_upload_form',
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
                url: 'http://'+App.util.Config.hostname()+'/models/upload',
                waitMsg: 'Processing...',
                success: function(fp, o) {
                    Ext.Msg.alert('Success', o.result );
                },
                failure: function(fp, o){
                    console.log({
                        fp, o
                    })
                    Ext.Msg.alert('failure', o.result );

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
            url: 'http://'+App.util.Config.hostname()+'/models/process',
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
                Ext.getStore('Subtypes').load();
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

    onSearch : function (component, e){
    	if (e.keyCode == 13) {
    		store = Ext.getStore('Subtypes') //this.getViewModel().getStore('tools');
            self = this;
            params = this.getElementValue();
    		
    		// console.log({
    		// 	params
    		// })

            store.load({
                params: params,
                callback: function(records,operation,success){
                    // console.log({
                    // 	records, operation, success
                    // })
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

    getElement : function(){
    	return {
    		search_by_name : Ext.ComponentQuery.query('textfield[name=search_by_name_model]')[0],
			search_by_pwbno: Ext.ComponentQuery.query('textfield[name=search_by_pwbno_model]')[0],
			search_by_pwbname: Ext.ComponentQuery.query('textfield[name=search_by_pwbname_model]')[0],
			search_by_process: Ext.ComponentQuery.query('textfield[name=search_by_process_model]')[0],
			search_by_code: Ext.ComponentQuery.query('textfield[name=search_by_code_model]')[0],
            search_by_cavity: Ext.ComponentQuery.query('textfield[name=search_by_cavity_model]')[0],
            search_by_side_model:Ext.ComponentQuery.query('textfield[name=search_by_side_model]')[1],

    	};
    },

    getElementValue : function (){
    	var elements = this.getElement();

    	var elementsValue = {
    		name: elements.search_by_name.value,
    		pwbno: elements.search_by_pwbno.value,
    		pwbname: elements.search_by_pwbname.value,
    		process: elements.search_by_process.value,
    		code: elements.search_by_code.value,
            cavity : elements.search_by_cavity.value,
            side : elements.search_by_side_model.value,
    	}

    	console.log({elementsValue, elements });

    	let result = {}
    	var key;
    	for (key in elementsValue){
    		if (elementsValue[key] != '' && elementsValue[key] != null  ) {
    			result[key] = elementsValue[key]
    		}
    	}

    	return result;
    },

    onDelete(grid,rowIndex,colIndex){
        console.log({
            grid,
            rowIndex,
            colIndex
        })


        if (grid) {
            // console.log(grid);
            var model = grid.getStore().getAt(rowIndex);
            
            if (!model) {
              Ext.Msg.alert('Info', 'No Record Selected');
              return;
            }

            console.log({model})
            
            Ext.Msg.confirm('Remove Record', 
              'Are you sure you want to delete?', 
              function (button) {
                if (button == 'yes') {
                  grid.store.remove(model);
                  grid.store.sync()
                  // self.onCancel();

                }
            });
        }
    },

    onDownload(){
        console.log('onDownload')
        let url = 'http://localhost/big/public/api/models/download';
        window.open(url, '_blank');
    },

    infoOnClick(){
        // parameter 1=judul, 2 = message
        Ext.Msg.alert('Info', 'Klik dua kali pada row untuk edit!');
    },

    onRefresh(paggingtoolbar, page, opts){
        let elements = this.getElement(); 

        for( i in elements ){
            elements[i].setValue('');
        }
    },


});
