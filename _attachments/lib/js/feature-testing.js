var _data = [];

$(document).ready(function() {
    $('#dialog-confirm').dialog({
        height: '100',
        position: ['center', 90],
        modal: true,
        buttons: {
            "No": function() {
                $.getJSON('feature-testing-all.json', function(data) { _data = data; _fetchURL(); });
                $(this).dialog("close");
            },
            "Yes": function() {
                $.getJSON('feature-content-testing.json', function(data) { _data = data; _fetchURL(); });
                $(this ).dialog("close");
            }
        },
    });

    $('#skip').click(function(ev) {
        ev.preventDefault();
        $('.feature-testing-inner').fadeOut('slow', function() {
            _fetchURL();
            //$('#form').resetForm();
            $('.feature-testing-inner').fadeIn('slow');
        });
    });

    $('#form').submit(function(ev){
        ev.preventDefault();
        var json = {};
        jQuery.map($(this).serializeArray(), function(n, i){ json[n['name']] = n['value']; });
        $.couch.db('feature-testing').saveDoc(jQuery.parseJSON(JSON.stringify(json)), {
            success : function() {
                $('.feature-testing-inner').fadeOut('slow', function() {
                    _fetchURL();
                    //$('#form').resetForm();
                    $('.feature-testing-inner').fadeIn('slow');
                });
            }
        });
    });    
});

var _fetchURL = function() {
    _data = _.shuffle(_data);
    index = _data[Math.floor(Math.random() * _data.length)];
    //$('.feature-testing-inner').html($('<b/>', {text : index}));
    $('.feature-testing-inner').html($('<a/>', { 'href' : index, text : index.replace(/http:\/\/(www.)?/,''), id : 'url', target : '_blank' }));
    $('input[name=URL]').val(index);
    _data.pop(index);
}