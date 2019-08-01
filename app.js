$(function () {

    const reset = $("#reset-btn");
    const start = $("#start-btn");
    const stop = $("#stop-btn");

    let hrs = 0;
    let min = 0;
    let sec = 0;
    let total_time = 0;

    reset.click(function () {
        hrs = 0;
        min = 0;
        sec = 0;
        total_time = 0;
        $("#hours").val("0");
        $("#minutes").val("0");
        $("#seconds").val("0");
        console.log(hrs + " : " + min + " : " + sec)
        console.log(total_time)
    });
    let flag = 0;
    start.click(function () {
        if (check_time()) {
            if (flag == 0) {
                hrs = parseInt($("#hours").val());
                min = parseInt($("#minutes").val());
                sec = parseInt($("#seconds").val());
            }
            else {
                hrs = parseInt($("#hr").text());
                min = parseInt($("#mn").text());
                sec = parseInt($("#sc").text());

            }
            let myinterval = setInterval(() => {
                stop.click(function () {
                    flag = 1;
                    // hrs = parseInt($("#hr").text());
                    // min = parseInt($("#mn").text());
                    // sec = parseInt($("#sc").text());
                    // console.log(flag)
                    clearInterval(myinterval);
                    // console.log(flag)

                    console.log(hrs + " : " + min + " : " + sec)

                });
                $("#sc").html(sec)
                $("#mn").html(min)
                $("#hr").html(hrs)
                sec--;
                if (sec < 0) {
                    if (min == 0) {
                        if (hrs == 0) {
                            clearInterval(myinterval);
                        }
                        else {
                            hrs--;
                            min = 59;
                        }

                    }
                    else {
                        min--;
                        sec = 59;
                    }
                }
            }, 1000)
        }


    });



    function check_time() {
        min = parseInt($("#minutes").val());
        sec = parseInt($("#seconds").val());
        if (min > 60 || sec > 60) {
            alert("Fuck off");
            return false;
        }
        return true;

    }
}); 