Ext.define('App.model.Schedule', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'model', type: 'auto' },
        { name: 'pwbno', type: 'auto' },
        { name: 'pwbname', type: 'auto' },
        { name: 'process', type: 'auto' },
        { name: 'code', type: 'auto' },
        { name: 'prod_no', type: 'auto' },
        { name: 'rev_date', type: 'auto' },
        { name: 'line', type: 'auto' },
        { name: 'lot_size', type: 'auto' },
        { name: 'seq_start', type: 'int' },
        { name: 'seq_end', type: 'int' },
        { name: 'start_serial', type: 'auto' },
        { name: 'qty', type: 'int' },

    ]
    
});
