console.clear();

console.log(window);
$.ajax({
    url: 'https://icanhazdadjoke.com',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
        console.log('Data received:', response);
    },
    error: function(xhr, status, error) {
        console.error('Error:', error);
    }
});
