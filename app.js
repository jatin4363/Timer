$(function () {

    const reset = $("#reset-btn");
    const start = $("#start-btn");
    const stop = $("#stop-btn");

    let hrs = 0;
    let min = 0;
    let sec = 0;

    let flag = 0;

    reset.click(function () {
        flag = 0;
        hrs = 0;
        min = 0;
        sec = 0;
        $("#hours").val("0");
        $("#minutes").val("0");
        $("#seconds").val("0");
        $("#hr").text("0");
        $("#mn").text("0");
        $("#sc").text("0");
        // console.log(hrs + " : " + min + " : " + sec)
    });

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

                    // console.log(hrs + " : " + min + " : " + sec)

                });
                $("#sc").html(sec)
                $("#mn").html(min)
                $("#hr").html(hrs)
                sec--;
                if (sec < 0) {
                    if (min == 0) {
                        if (hrs == 0) {
                            // console.log("fin")
                            alert("TIME'S UP !!!");
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
        if (min >= 60 || sec >= 60) {
            alert("Enter minutes and seconds from 0-59");
            return false;
        }
        return true;

    }
}); 