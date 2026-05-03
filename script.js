
			function showMore(){
				document.querySelector('.more-option').classList.toggle('show')
			}
			function showModel(){
				document.querySelector('.model-option').classList.toggle('modelActive')
			}
			function showSideBar(){
				document.querySelector('.side-bar').style.right = "0"
			}
			const	moreWrapper = document.querySelector('.header-right');
			const	moreOption = document.querySelector('.more-option');
			const	modelWrapper = document.querySelector('.logo');
			const	modelOption = document.querySelector('.model-option');
			const	sideBarWrapper = document.querySelector('.side-bar');
			const	sideBar = document.querySelector('.side-bar-inner');
		
			document.addEventListener('click', (e)=>{
				if(!moreWrapper.contains(e.target)){
					moreOption.classList.remove('show')
				}
				if(!modelWrapper.contains(e.target)){
					modelOption.classList.remove('modelActive')
				}
				if(sideBar.contains(e.target)){
					sideBarWrapper.style.right = "100%"
				}
			});
			function getTime(){
				const now = new Date();
				let hours = now.getHours();
				let minutes = now.getMinutes();
				const ampm = hours >= 12 ? 'PM' : 'AM';
				hours = hours % 12;
				hours = hours ? hours : 12;
				minutes = minutes.toString().padStart( 2 ,'0')
				return  `${hours}:${minutes} ${ampm}`
			}
			
			const textarea = document.getElementById('input');
			textarea.addEventListener('input', ()=>{
				textarea.style.height = "auto";
				textarea.style.height = textarea.scrollHeight + 'px';
			})
			
const send = document.querySelector('.send')
send.addEventListener('click', ()=>{
    const time = getTime();
    const textarea = document.getElementById('input')
    const welcome = document.getElementById('welcome')
    const chatBox = document.querySelector('.chat-box')
    const question = textarea.value;
    
    if (welcome) welcome.remove(); // Only remove if it exists
    
    chatBox.innerHTML += `<div class="chat-area">
    <div class="message user">${question}</div>
    <span class="chat-action">
    <div>${time}</div>
    <div><i class="fa-solid fa-clipboard"></i></div>
    <div><i class="fa-solid fa-pen"></i></div>
    </span>
    </div>`
    
    textarea.value = ''; // Also clear the input
})