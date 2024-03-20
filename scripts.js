const reorder = () => {

    const list = document.getElementById("wrapper");
    [...list.children]
    .sort((a, b) => a.getAttribute("id") > b.getAttribute("id")? 1 : -1)
    .forEach(node => list.appendChild(node));
  }
  reorder()

  function editModal(name){
    
    const pics = document.getElementsByClassName("pictureModal")
    for (let i = 0; i < pics.length; i++) {
        pics[i].src= "./Pictures/modal/"+name+"/"+name+i+".jpg";
      }

  }


