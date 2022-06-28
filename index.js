document.getElementById('MyForm').addEventListener('submit', function(e) {
    //чтобы не отправилась форма. 
   e.preventDefault(); 
   console.log(document.getElementById('userName').value);
   console.log(document.getElementById('userEmail').value);
   console.log(document.getElementById('mess').value);
});