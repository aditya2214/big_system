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
      // get cmp required id as their parameter.
			release_date : Ext.getCmp('schedule_date'),
			rev : Ext.getCmp('rev'),
		}
	},

	getElementValue : function (){
		values = this.getElement();
		

    let result = {};
    for (i in values) {
      if (values[i].value != null && values[i].value != ''  ) {
        result[i] = values[i].value
      }
    }

    return result;
	},

  clearElements(){
    var elements = this.getElement();
    for (i in elements){
      elements[i].setValue('');
    }
  },

  getSearchElemet(){
    return {
      search_by_name : Ext.ComponentQuery.query('textfield[name=search_by_name]')[1],
      search_by_pwbno  : Ext.ComponentQuery.query('textfield[name=search_by_pwbno]')[1],
      search_by_pwbname : Ext.ComponentQuery.query('textfield[name=search_by_pwbname]')[1],
      search_by_process : Ext.ComponentQuery.query('textfield[name=search_by_process]')[1],
      search_by_code : Ext.ComponentQuery.query('textfield[name=search_by_code]')[1],
      search_by_prod_no : Ext.ComponentQuery.query('textfield[name=search_by_prod_no]')[1],
      search_by_rev_date : Ext.ComponentQuery.query('textfield[name=search_by_rev_date]')[1],
      search_by_line : Ext.ComponentQuery.query('textfield[name=search_by_line]')[1],
      search_by_lot_size : Ext.ComponentQuery.query('textfield[name=search_by_lot_size]')[1],
      search_by_seq_start : Ext.ComponentQuery.query('textfield[name=search_by_seq_start]')[1],
      search_by_seq_end : Ext.ComponentQuery.query('textfield[name=search_by_seq_end]')[1],
      search_by_start_serial : Ext.ComponentQuery.query('textfield[name=search_by_start_serial]')[1],
      search_by_start_serial : Ext.ComponentQuery.query('textfield[name=search_by_side_model]')[1],
    }
  },

  getSearchElemetValue(){
    let SearchElements = this.getSearchElemet();
    let element = {};
    for (index in SearchElements) {
      if (SearchElements[index].value!='') {
        var newIndex = index.replace('search_by_', '');
        element[newIndex] = SearchElements[index].value;
      }
    }

    return element
  },

  clearSearchElement(){
    let SearchElements = this.getSearchElemet();
    for (i in SearchElements ){
      SearchElements[i].setValue(''); //set value to blanks!
    }

    this.clearElements();
  },

  onSearch(component, event){
    if (event.keyCode == 13) {
      let searchElements = this.getSearchElemetValue();
      let elements = this.getElementValue();
      const allElements = Object.assign({}, searchElements, elements );

      console.log(allElements)

      var store = Ext.getStore('Histories')
      store.load({
        params: allElements
      })
    }
  }

});
