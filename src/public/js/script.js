const socket = io();

const send = document.querySelector("#send-message");
const messagesList = document.querySelector("#messages-list");

send.addEventListener("click", () => {

    const message = document.querySelector("#message-input");

    socket.emit("message", message.value);

    message.value = "";

});

socket.on("message", ({user, message}) => {

    const msg = document.createRange().createContextualFragment(`
    <li><div class="message">
                
        <div class="image-container">
            <img src="/images/avatar.jpeg">
        </div>

        <div class="message-body">
            
            <div class="user-info">
                <span class="username">${user}</span>
                <span class="time">hace 1 segundo</span>
            </div>

            <p>${message}</p>

        </div>
        
    </div></li>
    `);

    messagesList.append(msg);

});