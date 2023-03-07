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

window.addEventListener("load", () => {

    function $ (elem) {
        return document.querySelector(elem)
    }

    const $inputTitle = $("#input-title")
    const $inputfirst = $("#input-first")
    const $inputlast = $("#input-last")
    const $inputFull = $("#input-full")
    const $inputFamily = $("#input-family")
    const $inputImg = $("#input-img")
    const $form = $("#edit-character")

    fetch(`http://localhost:3000/characters/${getQueryStringValues("id")}`)
        .then(response => response.json())
        .then(data => {
            $inputTitle.value = data.title
            $inputfirst.value = data.firstName
            $inputlast.value = data.lastName
            $inputFull.value = data.fullName
            $inputFamily.value = data.family
            $inputImg.value = data.imageUrl
        })
        .catch(error => console.log(error))

    $form.addEventListener("submit", () => {
        fetch(`http://localhost:3000/characters}`, {
        method: "POST",
        body: JSON.stringify({
            title: $inputTitle.value,
            firstName: $inputfirst.value,
            lastName: $inputlast.value,
            fullName: $inputFull.value,
            family: $inputFamily.value,
            imageUrl: $inputImg.value
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            window.location.href = `http://127.0.0.1:5500/index.html`
        })
        .catch(error => console.log(error))
    })

})