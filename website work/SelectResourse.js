// document.ready function
$(function () {
    // selector has to be . for a class name and # for an ID
    $('.button_1').click(function (e) {
        //
        var x = document.getElementById("Subject").selectedIndex;
        var y = document.getElementById("LearningStyles").selectedIndex;
        if (x == 0 || y == 0) {
            alert("Please fill all submission feilds.");
        } else if (x == 1 && y == 1) {
            //text for Physics & Visual
            //a string to be displayed on the page.
            $('#demo').html(``);
        } else if (x == 1 && y == 2) {
            //text for Physics & Audio
            $('#demo').html(``);
        } else if (x == 1 && y == 3) {
            //text for Physics &
            $('#demo').html(``);
        } else if (x == 1 && y == 4) {
            //text for Physics & K
            $('#demo').html(``);
        } else if (x == 2 && y == 1) {
            //text for Trig & Visual
            $('#demo').html(`
              <h2>
              <b><u>1. MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calulus, Trigonometry
              <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/plane-trigonometry">https://www.mathalino.com/reviewer/plane-trigonometry</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calulus, Trigonometry, Youtube, Lectures
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw">https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>3. 3Blue1Brown</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calulus, Trigonometry, Youtube, 3Blue1Brown,Computer Scinece, Applications
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw">https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw</a></p2>
              <br>
              </h2>
              `);
        } else if (x == 2 && y == 2) {
            //text for Trig & Auditory
            $('#demo').html(`
              <h2>
              <b><u>1. MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calulus, Trigonometry
              <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/plane-trigonometry">https://www.mathalino.com/reviewer/plane-trigonometry</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calulus, Trigonometry, Youtube, Lectures
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw">https://www.youtube.com/channel/UCSoLIxNywmejhfPQefj-ZEw</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>3. 3Blue1Brown</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Verbal, Calulus, Trigonometry, Youtube, 3Blue1Brown,Computer Scinece, Applications
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw">https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw</a></p2>
              <br>
              </h2>
              `);
        } else if (x == 2 && y == 3) {
          //text for Trig & Visual
            $('#demo').html(`
              <h2>
              <b><u>1. PHET TRIG TOUR</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Hands On, Calulus, Trigonometry, Application, Simulation, PHET
              <br><p2><b>URL:</b> <a href="https://phet.colorado.edu/en/simulation/trig-tour">https://phet.colorado.edu/en/simulation/trig-tour</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. eduMedia Tigronometric Circle</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Hands On, Calulus, Trigonometry, Application, Simulation, eduMedia
              <br><p2><b>URL:</b> <a href="https://www.edumedia-sciences.com/en/media/284-trigonometric-circle">https://www.edumedia-sciences.com/en/media/284-trigonometric-circle</a></p2>
              <br>
              </h2>
            `);
        } else if (x == 2 && y == 4) {
            $('#demo').html(`
              <h2>
              <b><u>1. BetterExplained Trigonometry</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Reading/Writting, Calulus, Trigonometry, Application, Simulation, eduMedia
              <br><p2><b>URL:</b> <a href="https://betterexplained.com/articles/intuitive-trigonometry/">https://betterexplained.com/articles/intuitive-trigonometry/</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. Khan Academy Trigonometry</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Reading/Writting, Calulus, Trigonometry, Application, Simulation, Khan Academy
              <br><p2><b>URL:</b> <a href="https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-solve-for-an-angle/a/inverse-trig-functions-intro">https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-solve-for-an-angle/a/inverse-trig-functions-intro</a></p2>
              <br>
              </h2>`);
        } else if (x == 3 && y == 1) {
            $('#demo').html(`<h2>
              <b><u>1. Differential Calculus MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Reading, Calulus, Application, MATHalino
              <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/differential-calculus/differential-calculus">https://www.mathalino.com/reviewer/differential-calculus/differential-calculus</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>2. Derivation Introductions</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Auditory, Calulus, Application, khanacademy
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449">https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449</a></p2>
              <br>
              </h2>

              <h2>
              <b><u>3. PHET Calculus Grapher</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Hands On, Calulus, Application, Simulation, PHET
              <br><p2><b>URL:</b> <a href="https://phet.colorado.edu/en/simulation/calculus-grapher">https://phet.colorado.edu/en/simulation/calculus-grapher</a></p2>
              <br>
              </h2>
            `);
        } else if (x == 3 && y == 2) {
            $('#demo').html(`<h2>
              <b><u>1. Calulus Playlist</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Auditory, Calulus, Application, Youtube
              <br><p2><b>URL:</b> <a href="https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449">https://www.youtube.com/watch?v=EKvHQc3QEow&list=PL19E79A0638C8D449</a></p2>
              <br>
              </h2>
            `);
        } else if (x == 3 && y == 3) {
            $('#demo').html(`
              <h2>
              <b><u>1. PHET Calculus Grapher</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Hands On, Calulus, Application, Simulation, PHET
              <br><p2><b>URL:</b> <a href="https://phet.colorado.edu/en/simulation/calculus-grapher">https://phet.colorado.edu/en/simulation/calculus-grapher</a></p2>
              <br>
              </h2>
            `);
        } else if (x == 3 && y == 4) {
            $('#demo').html(`
              <h2>
              <b><u>1. Differential Calculus MATHalino</u></b>
              <br><b>Subject:</b>  Mathmatics
              <br><b>Tags:</b> Visual, Reading, Calulus, Application, MATHalino
              <br><p2><b>URL:</b> <a href="https://www.mathalino.com/reviewer/differential-calculus/differential-calculus">https://www.mathalino.com/reviewer/differential-calculus/differential-calculus</a></p2>
              <br>
              </h2>
            `);
        } else if (x == 4 && y == 1) {
            $('#demo').html(``);
        } else if (x == 4 && y == 2) {
          $('#demo').html(``);
        } else if (x == 4 && y == 3) {
          $('#demo').html(``);
        } else if (x == 4 && y == 4) {
          $('#demo').html(``);
        } else if (x == 5 && y == 1) {
          $('#demo').html(``);
        } else if (x == 5 && y == 2) {
          $('#demo').html(``);
        } else if (x == 5 && y == 3) {
          $('#demo').html(``);
        } else if (x == 5 && y == 4) {
          $('#demo').html(``);
        } else if (x == 6 && y == 1) {
          $('#demo').html(``);
        } else if (x == 6 && y == 2) {
          $('#demo').html(``);
        } else if (x == 6 && y == 3) {
          $('#demo').html(``);
        } else if (x == 6 && y == 4) {
          $('#demo').html(``);
        }

    });
});
