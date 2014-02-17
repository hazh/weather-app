requirejs.config({
    baseUrl: "js/lib",
    paths: {
        app: "../app",
        jquery: "jquery-2.1.0.min"
    }
});

requirejs(["jquery", "app/forecast"],
    function($, forecast) {
        $("#location_input").submit(function(event) {
            var input = $(this).children("input[type='text']").val();
            forecast.report(input);
            event.preventDefault();
        });
    }
);