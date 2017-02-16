function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

var isbn = getQueryVariable("isbn");

var url = "https://openlibrary.org/api/books?bibkeys=ISBN:" + isbn + "&jscmd=data&format=jsonp"


$.ajax({
  dataType: "jsonp",
  url: url,
  success: success
});

function success(data) {
	$("#pic").attr('src', data["ISBN:" + isbn].cover.large);
	$("#author").append(data["ISBN:" + isbn].authors[0].name);
	$("#author").append(data["ISBN:" + isbn].title);
}
