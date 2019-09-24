document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.collapsible').forEach(function (elems) {
        M.Collapsible.init(elems);
    });
    document.querySelectorAll('select').forEach(function (elems) {
        M.FormSelect.init(elems);
    });
    document.querySelectorAll('.modal').forEach(function(elems){
        M.Modal.init(elems);
    });

});