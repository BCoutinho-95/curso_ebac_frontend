document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function() {
        var addItem = document.querySelector('input[name=ItemList]').value;
        var newItem = document.createElement('li');
        newItem.textContent = addItem;
        document.querySelector('ol').appendChild(newItem);
        document.getElementById('Item').value = "";
    });

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
    });

    document.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('strike');
        }
    });
});
