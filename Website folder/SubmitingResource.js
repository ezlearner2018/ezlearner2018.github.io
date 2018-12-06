$(function () {
    // selector has to be . for a class name and # for an ID
    $('.button_1').click(function (e) {
        var param1 = document.getElementById("Namenew").value;
        var param2 = document.getElementById("Subjectnew").selectedIndex;
        var param3 = document.getElementById("LearningStylesnew").selectedIndex;
        var param4 = document.getElementById("Tagsnew").value;
        var param5 =document.getElementById("URLnew").value;
        var param6 =document.getElementById("Descriptionsnew").value;
        if (param1 === "" || param2 === 0 || param3 ===0 || param4 === "" || param5 === "" || param6 === "" ) {
            alert("Please fill all submission feilds.");
        } else{
            document.getElementById("Part1").style.display = "none";
            //sets the next scene/parts (if your looking at what parts are on the html doc)
            document.getElementById("Part2").style.display = "block";

            /*
            For Troubleshooting
            console.log(param1);
            console.log(param2);
            console.log(param3);
            console.log(param4);
            console.log(param5);
            console.log(param6);
            */
        } 
    });
});

$(function () {
    // selector has to be . for a class name and # for an ID
    $('.button_3').click(function (e) {
        document.getElementById("Part2").style.display = "none";
        console.log(document.getElementById("Namenew").value);
        //sets the next scene/parts (if your looking at what parts are on the html doc)
        document.getElementById("Part3").style.display = "block";
    });
});

//this code will add the users submission to simulate their data being entered
//call a function simliar to the the function created to evaluate and output data.
$(function () {
    // selector has to be . for a class name and # for an ID
    $('.button_4').click(function (e) {
        //
        var x = document.getElementById("Subject").selectedIndex;
        var y = document.getElementById("LearningStyles").selectedIndex;
        // This code is for the new submission that needs to be added
        var param1val = document.getElementById("Namenew").value;
        var param2val = document.getElementById("Subjectnew").value;
        var param2 = document.getElementById("Subjectnew").selectedIndex;
        var param3val = document.getElementById("LearningStylesnew").value;
        var param3 = document.getElementById("LearningStylesnew").selectedIndex;
        var param4val = document.getElementById("Tagsnew").value;
        var param5val =document.getElementById("URLnew").value;
        var param6val =document.getElementById("Descriptionsnew").value;
        
        //Display decision making and output
        if (x == 0 || y == 0) {
            alert("Please fill all submission feilds.");
        } else if (x == 1 && y == 1) {
            //text for Trig & Visual
            if(param2==1 && param3==1){
            $('#demo').html(`
              <h2>
              <b><u>1. MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry
              <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/plane-trigonometry">https://www.mathalino.com/reviewer/plane-trigonometry</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry, Youtube, Lectures
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw">https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>3. 3Blue1Brown</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry, Youtube, 3Blue1Brown,Computer Scinece, Applications
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw">https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw</a></p2>
              <br>
              </h2>
              
              <h2>
              <b><u>4. `+param1val+`</u></b>
              <br><b>Subject:</b>`+param2val+`
              <br><b>Tags:</b>`+param4val+`
              <br><p2><b>URL:</b> <a href="`+param5val+`">`+param5val+`</a></p2>
              <br>
              </h2>
              `);


            }
            else{
            $('#demo').html(`
              <h2>
              <b><u>1. MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry
              <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/plane-trigonometry">https://www.mathalino.com/reviewer/plane-trigonometry</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry, Youtube, Lectures
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw">https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>3. 3Blue1Brown</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry, Youtube, 3Blue1Brown,Computer Scinece, Applications
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw">https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw</a></p2>
              <br>
              </h2>
              `);}
        } else if (x == 1 && y == 2) {
            if(param2==1 && param3==2){
            //text for Trig & Auditory
            $('#demo').html(`
              <h2>
              <b><u>1. MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry
              <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/plane-trigonometry">https://www.mathalino.com/reviewer/plane-trigonometry</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry, Youtube, Lectures
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw">https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>3. 3Blue1Brown</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry, Youtube, 3Blue1Brown,Computer Scinece, Applications
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw">https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>4. `+param1val+`</u></b>
              <br><b>Subject:</b>`+param2val+`
              <br><b>Tags:</b>`+param4val+`
              <br><p2><b>URL:</b> <a href="`+param5val+`">`+param5val+`</a></p2>
              <br>
              </h2>
              `);
            }else{
                $('#demo').html(
                `<h2>
                <b><u>1. MATHalino</u></b>
                <br><b>Subject:</b>  Mathmatics
                <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry
                <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/plane-trigonometry">https://www.mathalino.com/reviewer/plane-trigonometry</a></p2>
                <br>
                </h2>
  
                <h2>
                <b><u>2. MATHalino</u></b>
                <br><b>Subject:</b>  Mathmatics
                <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry, Youtube, Lectures
                <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw">https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw</a></p2>
                <br>
                </h2>
  
                <h2>
                <b><u>3. 3Blue1Brown</u></b>
                <br><b>Subject:</b>  Mathmatics
                <br><b>Tags:</b> Visual, Verbal, Calculus, Trigonometry, Youtube, 3Blue1Brown,Computer Scinece, Applications
                <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw">https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw</a></p2>
                <br>
                </h2> `);
            }
        } else if (x == 1 && y == 3) {
            if(param2==1 && param3==3){
          //text for Trig & Visual
            $('#demo').html(`
              <h2>
              <b><u>1. PHET TRIG TOUR</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Hands On, Calculus, Trigonometry, Application, Simulation, PHET
              <br><p2><b>URL:</b> <a href="https://phet.colorado.edu/en/simulation/trig-tour">https://phet.colorado.edu/en/simulation/trig-tour</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. eduMedia Tigronometric Circle</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Hands On, Calculus, Trigonometry, Application, Simulation, eduMedia
              <br><p2><b>URL:</b> <a href="https://www.edumedia-sciences.com/en/media/284-trigonometric-circle">https://www.edumedia-sciences.com/en/media/284-trigonometric-circle</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>4. `+param1val+`</u></b>
              <br><b>Subject:</b>`+param2val+`
              <br><b>Tags:</b>`+param4val+`
              <br><p2><b>URL:</b> <a href="`+param5val+`">`+param5val+`</a></p2>
              <br>
              </h2>

            `);
        }else{
        $('#demo').html(`
        <h2>
        <b><u>1. PHET TRIG TOUR</u></b>
        <br><b>Subject:</b>  Mathmatics
        <br><b>Tags:</b> Hands On, Calculus, Trigonometry, Application, Simulation, PHET
        <br><p2><b>URL:</b> <a href="https://phet.colorado.edu/en/simulation/trig-tour">https://phet.colorado.edu/en/simulation/trig-tour</a></p2>
        <br>
        </h2>

        <h2>
        <b><u>2. eduMedia Tigronometric Circle</u></b>
        <br><b>Subject:</b>  Mathmatics
        <br><b>Tags:</b> Hands On, Calculus, Trigonometry, Application, Simulation, eduMedia
        <br><p2><b>URL:</b> <a href="https://www.edumedia-sciences.com/en/media/284-trigonometric-circle">https://www.edumedia-sciences.com/en/media/284-trigonometric-circle</a></p2>
        <br>
        </h2>`);

            }
        } else if (x == 1 && y == 4) {
            if(param2==1 && param3==4){
            $('#demo').html(`
              <h2>
              <b><u>1. BetterExplained Trigonometry</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Reading/Writting, Calculus, Trigonometry, Application, Simulation, eduMedia
              <br><p2><b>URL:</b> <a href="https://betterexplained.com/articles/intuitive-trigonometry/">https://betterexplained.com/articles/intuitive-trigonometry/</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. Khan Academy Trigonometry</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Reading/Writting, Calculus, Trigonometry, Application, Simulation, Khan Academy
              <br><p2><b>URL:</b> <a href="https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-solve-for-an-angle/a/inverse-trig-functions-intro">https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-solve-for-an-angle/a/inverse-trig-functions-intro</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>4. `+param1val+`</u></b>
              <br><b>Subject:</b>`+param2val+`
              <br><b>Tags:</b>`+param4val+`
              <br><p2><b>URL:</b> <a href="`+param5val+`">`+param5val+`</a></p2>
              <br>
              </h2>
              `);
            }else{
                $('#demo').html(`<h2>
                <b><u>1. BetterExplained Trigonometry</u></b>
                <br><b>Subject:</b>  Mathmatics
                <br><b>Tags:</b> Reading/Writting, Calculus, Trigonometry, Application, Simulation, eduMedia
                <br><p2><b>URL:</b> <a href="https://betterexplained.com/articles/intuitive-trigonometry/">https://betterexplained.com/articles/intuitive-trigonometry/</a></p2>
                <br>
                </h2>
  
                <h2>
                <b><u>2. Khan Academy Trigonometry</u></b>
                <br><b>Subject:</b>  Mathmatics
                <br><b>Tags:</b> Reading/Writting, Calculus, Trigonometry, Application, Simulation, Khan Academy
                <br><p2><b>URL:</b> <a href="https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-solve-for-an-angle/a/inverse-trig-functions-intro">https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-solve-for-an-angle/a/inverse-trig-functions-intro</a></p2>
                <br>
                </h2>`);
            }
        } else if (x == 2 && y == 1) {
            if(param2==2 && param3==1){
            $('#demo').html(`<h2>
              <b><u>1. Differential Calculus MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Reading, Calculus, Application, MATHalino
              <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/differential-calculus/differential-calculus">https://www.mathalino.com/reviewer/differential-calculus/differential-calculus</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. Derivation Introductions</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Auditory, Calculus, Application, khanacademy
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449">https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>3. PHET Calculus Grapher</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Hands On, Calculus, Application, Simulation, PHET
              <br><p2><b>URL:</b> <a href="https://phet.colorado.edu/en/simulation/calculus-grapher">https://phet.colorado.edu/en/simulation/calculus-grapher</a></p2>
              <br>
              </h2>
              
              <h2>
              <b><u>4. `+param1val+`</u></b>
              <br><b>Subject:</b>`+param2val+`
              <br><b>Tags:</b>`+param4val+`
              <br><p2><b>URL:</b> <a href="`+param5val+`">`+param5val+`</a></p2>
              <br>
              </h2>
            `);}else{
                $('#demo').html(`<h2>
                <b><u>1. Differential Calculus MATHalino</u></b>
                <br><b>Subject:</b>  Mathmatics
                <br><b>Tags:</b> Visual, Reading, Calculus, Application, MATHalino
                <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/differential-calculus/differential-calculus">https://www.mathalino.com/reviewer/differential-calculus/differential-calculus</a></p2>
                <br>
                </h2>
  
                <h2>
                <b><u>2. Derivation Introductions</u></b>
                <br><b>Subject:</b>  Mathmatics
                <br><b>Tags:</b> Visual, Auditory, Calculus, Application, khanacademy
                <br><p2><b>URL:</b> <a href="https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449">https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449</a></p2>
                <br>
                </h2>
  
                <h2>
                <b><u>3. PHET Calculus Grapher</u></b>
                <br><b>Subject:</b>  Mathmatics
                <br><b>Tags:</b> Visual, Hands On, Calculus, Application, Simulation, PHET
                <br><p2><b>URL:</b> <a href="https://phet.colorado.edu/en/simulation/calculus-grapher">https://phet.colorado.edu/en/simulation/calculus-grapher</a></p2>
                <br>
                </h2>
              `);
            }
        } else if (x == 2 && y == 2) {
            if(param2==2 && param3==2){
            $('#demo').html(`<h2>
              <b><u>1. Calulus Playlist</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Auditory, Calculus, Application, Youtube
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449">https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449</a></p2>
              <br>
              </h2>
              
              <h2>
              <b><u>4. `+param1val+`</u></b>
              <br><b>Subject:</b>`+param2val+`
              <br><b>Tags:</b>`+param4val+`
              <br><p2><b>URL:</b> <a href="`+param5val+`">`+param5val+`</a></p2>
              <br>
              </h2>
            `);}else{
                $('#demo').html(`<h2>
              <b><u>1. Calulus Playlist</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Auditory, Calculus, Application, Youtube
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449">https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449</a></p2>
              <br>
              </h2>
            `);
            }
        } else if (x == 2 && y == 3) {
            if(param2==2 && param3==3){
            $('#demo').html(`
              <h2>
              <b><u>1. PHET Calculus Grapher</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Hands On, Calculus, Application, Simulation, PHET
              <br><p2><b>URL:</b> <a href="https://phet.colorado.edu/en/simulation/calculus-grapher">https://phet.colorado.edu/en/simulation/calculus-grapher</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>4. `+param1val+`</u></b>
              <br><b>Subject:</b>`+param2val+`
              <br><b>Tags:</b>`+param4val+`
              <br><p2><b>URL:</b> <a href="`+param5val+`">`+param5val+`</a></p2>
              <br>
              </h2>
            `);}else{
                $('#demo').html(`
              <h2>
              <b><u>1. PHET Calculus Grapher</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Hands On, Calculus, Application, Simulation, PHET
              <br><p2><b>URL:</b> <a href="https://phet.colorado.edu/en/simulation/calculus-grapher">https://phet.colorado.edu/en/simulation/calculus-grapher</a></p2>
              <br>
              </h2>
            `);
            }
        } else if (x == 2 && y == 4) {
            if(param2==2 && param3==4){
            $('#demo').html(`
              <h2>
              <b><u>1. Differential Calculus MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Reading, Calculus, Application, MATHalino
              <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/differential-calculus/differential-calculus">https://www.mathalino.com/reviewer/differential-calculus/differential-calculus</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>4. `+param1val+`</u></b>
              <br><b>Subject:</b>`+param2val+`
              <br><b>Tags:</b>`+param4val+`
              <br><p2><b>URL:</b> <a href="`+param5val+`">`+param5val+`</a></p2>
              <br>
              </h2>
            `);}else{
                $('#demo').html(`
              <h2>
              <b><u>1. Differential Calculus MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Reading, Calculus, Application, MATHalino
              <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/differential-calculus/differential-calculus">https://www.mathalino.com/reviewer/differential-calculus/differential-calculus</a></p2>
              <br>
              </h2>
            `);
            }
        } 
    });
}); 
