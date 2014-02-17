define(["jquery"], function($) {
    return {
        report: function(param) {
            var url = "https://api.forecast.io/forecast/<key>/" + param
            $.ajax({
                type: "GET",
                url: url,
                dataType: "jsonp",
                success: function(data){
                    $("#output").html(data.daily.summary);
                },
                error: function() {
                    return "Error.";
                }
            });
        }
    }
});