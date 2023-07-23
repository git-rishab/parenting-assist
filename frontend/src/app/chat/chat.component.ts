import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  @ViewChild('chatMessages', { static: true }) chatMessagesRef!: ElementRef;
  newMessage: string = '';
  loading: boolean = true; // Initialize the loading flag to true
  connected: boolean = false; // Initialize the connected flag to false
  typing: boolean = false; // Initialize the typing flag to false
  url : string = 'https://thoughtful-pear-nightshirt.cyclic.app' // 'https://parent-guide.onrender.com'
  messages: { content: string; role: 'user' | 'assistant' }[] = []; // Array to store messages and their origin

  constructor() {
    // Simulate connection to the server with a delay (replace this with actual server communication)
    fetch(this.url).then((raw)=>raw.json()).then((data)=>{
      this.loading = false; // Hide the loading message after connection is established
      this.messages.push({content:'Welcome to Parenting Assist! How may I help you?', role:'assistant'})
      this.connected = true;
    })
  }

  sendMessage() {
    if (this.newMessage.trim() === '') {
      return;
    }

    // Set the typing flag to true before sending the message to the server
    this.messages.push({ content: this.newMessage, role: 'user' });
    this.typing = true;
    fetch(`${this.url}/chat`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({"prompt":this.newMessage, past_message:this.messages})
    }).then((raw)=>raw.json()).then((res)=>{
      this.messages.push({'content':res.message,'role':'assistant'});
      this.typing = false;

    }).catch((e)=>{
      alert(e)
      this.typing = false;
    })

    this.newMessage = '';
  }
}
