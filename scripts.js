const reorder = () => {

  const list = document.getElementById("wrapper");
  [...list.children]
    .sort((a, b) => a.getAttribute("id") > b.getAttribute("id") ? 1 : -1)
    .forEach(node => list.appendChild(node));
}
reorder()

function editModal(name) {

  const pics = document.getElementsByClassName("pictureModal")
  for (let i = 0; i < pics.length; i++) {
    pics[i].src = "./Pictures/modal/" + name + "/" + name + i + ".jpg";
  }

}

function showAll(param) {
  let wrap = document.getElementById('wrapper')
  let list = wrap.getElementsByClassName('col');
  if (param) {
    for (let i = 0; i < list.length; i++) {
      list[i].style.display = '';
    }
  }
 else {
    for (let i = 0; i < list.length; i++) {
      list[i].style.display = 'none';
    }
  } 
}

function filter() {
  let wrap = document.getElementById('wrapper');
  let list = wrap.getElementsByClassName('col');
  let interaction = document.getElementById('interactionSelect').value;
  let diffCheckboxes = document.querySelectorAll('input[type=checkbox]:checked');
  let diffArray = [];
  for(let i= 0; i< diffCheckboxes.length; i++){
      diffArray.push(diffCheckboxes[i].value);
  }
  
  for (let i = 0; i < list.length; i++) {
    if ((list[i].getElementsByClassName('players-interaction')[0].innerText == interaction || interaction == 'Both' ) && diffArray.includes(list[i].getElementsByClassName('difficulty')[0].innerText)){
        list[i].style.display = '';
    }
      else list[i].style.display = 'none';
    }
  }



