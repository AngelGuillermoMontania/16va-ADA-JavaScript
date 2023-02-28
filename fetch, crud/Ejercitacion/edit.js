function getQueryStringValues(key) {
    var arrParamValues = [];
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var arrParamInfo = url[i].split('=');
        if (arrParamInfo[0] == key || arrParamInfo[0] == key+'[]') {
            arrParamValues.push(arrParamInfo[1]);
        }
    }
    return (arrParamValues.length > 0 ? (arrParamValues.length == 1 ? arrParamValues[0] : arrParamValues) : null);
}

console.log(getQueryStringValues("id"))