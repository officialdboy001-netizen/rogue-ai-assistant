
			function showMore(){
				setTimeout(()=>{
				document.getElementById('moreOption').classList.toggle('show')
				}, 100)
			}
			
			
			function sendInput(){
				const textarea = document.getElementById('input')
				const welcome = document.getElementById('welcome')
				const chatBox = document.querySelector('.chat-box')
			  let value = textarea.value.trim()
				if(!value) return;
				textarea.value = '';
				welcome.remove();
				chatBox.innerHTML += `<div class="message user">${value}</div>`
			}