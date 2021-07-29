
//Start progess_1SS
function progressone() {

    var prg = document.getElementById('progress_1');
    var percent = document.getElementById('percentCount_1');
    var counter = 5;
    var progress = 25;
    var id = setInterval(frame, 50);

    function frame() {

        if (progress == 250) {

            clearInterval(id);

        }
        else {
            progress += 5;
            counter += 1;
            prg.style.width = progress + 'px';
            percent.innerHTML = counter + '%';

        }

    }
}
progressone();
//End progess_1

//Start progess_2
function progresstwo() {

    var prg = document.getElementById('progress_2');
    var percent = document.getElementById('percentCount_2');
    var counter = 5;
    var progress = 25;
    var id = setInterval(frame, 50);

    function frame() {

        if (progress == 200) {

            clearInterval(id);

        }
        else {
            progress += 5;
            counter += 1;
            prg.style.width = progress + 'px';
            percent.innerHTML = counter + '%';
        }

    }
}
progresstwo();
//End progess_2


//Start progess_3
function progressthree() {

    var prg = document.getElementById('progress_3');

    var percent = document.getElementById('percentCount_3');
    var counter = 1;
    var progress = 5;
    var id = setInterval(frame, 50);

    function frame() {

        if (progress == 150) {

            clearInterval(id);

        }
        else {
            progress += 5;
            counter += 1;
            prg.style.width = progress + 'px';
            percent.innerHTML = counter + '%';
        }

    }
}
progressthree();
//progess_3



//Start mixit_up By JavaScript
//var mixer = mixitup('.container');

//var mixer = mixitup(containerEl);

//var mixer = mixitup(containerEl, {
//    selectors: {
//        target: '.blog-item'
//    },
//    animation: {
//        duration: 300
//    }
//});
//});


//mixit_up

