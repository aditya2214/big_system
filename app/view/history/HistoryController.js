Ext.define('App.view.history.HistoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.history-history',

    onReleaseDateChange : function (){
    	var histories = Ext.getStore('Histories')
    	var scheduleMaster = Ext.getStore('ScheduleMasters')

    	elements = this.getElementValue();
    	
    	scheduleMaster.load({
    		params: {
    			release_date : elements.release_date
    		},
    		callback: function (){
    			console.log('callback')
    		}
    	});

    	histories.load({
    		params: {
    			release_date : elements.release_date
    		}
    	})
    },
	
	revOnChange : function (){
    	var histories = Ext.getStore('Histories')
		elements = this.getElementValue();
		histories.load({
    		params: {
    			release_date : elements.release_date,
    			rev : elements.rev
    		}
    	});
	},

	getElement : function (){
		return {
			release_date : Ext.getCmp('schedule_date'),
			rev : Ext.getCmp('rev'),

		}
	},

	getElementValue : function (){
		values = this.getElement();
		return {
			release_date: values.release_date.rawValue,
			rev : values.rev.value
		}
	},

});
