$(function () {
    // selector has to be . for a class name and # for an ID
    $('.button_3').click(function (e) {
        $('#main').html(`
        <div class="container">
        <!--Drop Down menu-->
        <select id="Subject">
          <!--first one is left blank to ensure that the program runs properly and if the user wants to cancel the drop down box.-->
          <option></option>
          <option value="Trigonometry">Trigonometry</option>
          <option value="Calculus">Calculus</option>
        </select>
        <!--Second feild is to specify learning Styles.-->
        <select id="LearningStyles">
          <!--first one is left blank to ensure that the program runs properly and if the user wants to cancel the drop down box.-->
          <option></option>
          <option value="Visual Learner">Visual Learner</option>
          <option value="Auditory Learner">Auditory Learner</option>
          <option value="Hands On Learner">Hands On Learner</option>
          <option value="Reading/Writting Learner">Reading/Writting Learner</option>
        </select>
        <!--Submit button, this is to submit the feilds-->
        <button class="button_4" type="submit">Search</button>
        <br>
        <div class="transbox">
          <p id="demo"></p>
        </div>
        <!--place holder code to understand and implement the css.-->
      </div>
    </aside>
    </div>
    <!--This sends the user to the submiting a resourse page that will store all that information localy-->
    <h2>
      <center>
        <b><u>Dont see a Resource that you like?</u></b>
        <br>Submit a Resource to our Database to help out the community!
        <br>
        <p2> <a href="submitaresource.html"><b>Click Here</b></a></p2>
        <br>
      </center>
    </h2>
        `);
        console.log(2);
    });
});