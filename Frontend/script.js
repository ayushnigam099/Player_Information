const button= document.getElementsByTagName("button");

button[0].addEventListener('click', form);
button[1].addEventListener('click', form);
button[2].addEventListener('click', form);
button[3].addEventListener('click', form);
function form(e)
{
  e.preventDefault();
  var form = document.createElement('form');
  form.id = 'meetingForm';
  form.innerHTML = `
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <br>
      <input type="submit" value="Submit">
  `;
  
  this.parentNode.after(form);

form.addEventListener('submit', (e)=>
  {
    e.preventDefault();
    var name= document.querySelector('#name').value;
    var email=document.querySelector('#email').value;
}); 
}