var queryURL = "https://api.kanye.rest?format=text";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(response);
            $("#kanye").text(response);
        });
