<h1>EasyTools</h1>
A collection of JavaScript microlibraries, for programming website features easier.
<h2>Tools</h2>
<ul>
  <li><a href="#calc">Calculator</a></li>
  <li><a href="#dt">Date and Time</a></li>
</ul>
<h2 id="calc">Calculator</h2>
Function for solving user-submitted math equations. Useful for calculator programs.
<h3>How it works</h3>
<ol>
  <li>Create array, with each item representing a number/operator in the equation</li>
  <li>Execute the solve() function, inputing your equation array as the parameter</li>
  <li>The equation's answer will be outputted by the function</li>
</ol>
<h3>Array Codes (when writing equation array, use these codes for operators/special numbers</h3>
<ul>
  <li>( = FPAR</li>
  <li>) = BPAR</li>
  <li>^ = EXP</li>
  <li>√ = SQRT</li>
  <li>* = MUL</li>
  <li>/ = DIV</li>
  <li>+ = PLU</li>
  <li>- = MIN</li>
  <li>π = PI</li>
</ul>
<h2 id="dt">Date and Time</h2>
Function for getting date and time. Useful for displaying the current time.
<h3>How it works</h3>
<ol>
  <li>Call the getTime() function, to get the current time value</li>
  <li>The function is an object; you must select the value you want
</ol>
<h3>Function Values</h3>
<ul>
  <li>getTime.second = Gets current second</li>
  <li>getTime.minute = Gets current minute</li>
  <li>getTime.hour = Gets current hour (in 12-hour format)</li>
  <li>getTime.day_night = Outputs whether it is AM or PM (for 12-hour format)</li>
  <li>getTime.day = Gets current day of the week (Sunday, Monday, Tuesday, etc.)</li>
  <li>getTime.date = Gets current date</li>
  <li>getTime.dateOrdinalSuffix = Outputs the correct ordinal suffix for the current date (1st, 2nd, 3rd, 4th, etc.)</li>
  <li>getTime.month = Gets current month (January, February, March, etc.)</li>
  <li>getTime.year = Gets current year</li>
</ul>
<h3>Advantages over JS Default Date/Time Object</h3>
<ul>
  <li>More human: Instead of outputting days and months in numbers, my function outputs it in human-readable language</li>
  <li>12-hour format: Unlike regular JS, which is in the 24-hour format, my function is in the 12-hour format, including outputting AM or PM</li>
</ul>
