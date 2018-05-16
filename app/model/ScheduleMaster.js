Ext.define('App.model.ScheduleMaster', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'is_processed', type: 'auto' },
        { name: 'is_active', type: 'auto' },
        { name: 'effective_date', type: 'auto' },
        { name: 'end_effective_date', type: 'auto' },
        { name: 'release_date', type: 'auto' },
        { name: 'rev', type: 'int' },
    ]
    
});
