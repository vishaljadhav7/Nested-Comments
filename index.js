


const container = document.querySelector('.comments-container');


function addInputBox(){
  const inputBox = document.createElement('div')
  inputBox.setAttribute('class', 'comment-details');
  
   inputBox.innerHTML = ` 
   <input type="text" id="" class="comment-input" />
   <button type="submit" class="comment-submit">submit</button>
   ` 

  return inputBox ;
  
}


function addComment(value){
  const commentDiv = document.createElement('div');
  commentDiv.setAttribute('class','all-comments')

  commentDiv.innerHTML = `<div class="card">
  <span class="comment">${value}</span>
  <span class="reply">add reply</span>
  </div>`

  return commentDiv;

}

container.addEventListener('click', function handleClick(e){
    const isReply = e.target.classList.contains("reply");
    const isSubmit = e.target.classList.contains("comment-submit");
    const closestCard = e.target.closest(".all-comments");
    
    
    if(isReply){
      // add input box
      closestCard.appendChild(addInputBox());
    }else if(isSubmit){
      // add comment
      const commentDetails = e.target.closest('.comment-details');
      const commentData = commentDetails.querySelector('.comment-input'); 
      if(commentData.value){
        closestCard.appendChild(addComment(commentData.value))
        commentDetails .remove()
      }

    }
  })

