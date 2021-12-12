function toggleText() {
     let btnClassToggle = document.querySelector('.toggle-text-button');
     let divText = document.getElementById('text');
     btnClassToggle.onclick  =function(){
        if(divText.hidden){divText.hidden = false;
        }else divText.hidden = true;
      }
}
