class Card{ 

constructor(src, title, info){
            this.src = src; 
            this.title = title; 
            this.info = info;}}
    let address = new Card("pin.png", "Address", "Level 6, 23 Pitt St, Sydney")
    let phoneNumber = new Card("phone.png", "Phone", "+61 9 211 3741")
    let email = new Card("message.png", "E-mail", "hey@halcyon.com.au")
    let contact_array = [address, phoneNumber, email]
    let contact = document.getElementById('contact');
    contact_array.forEach(
        function(element){
                let html = `<div class="contacts_block">
                <img src="${element.src}">
                <p class="contact_title">${element.title}</p>
                <p class="contact_text">${element.info}</p></div>`
                let crtDiv = document.createElement('div');
                crtDiv.innerHTML = html;
                contact.appendChild(crtDiv);
            }) 
        


=======
function creation(){
    class Card{
        constructor(src, title, info)
        { this.src = src; 
            this.title = title; 
            this.info = info;}
        }
    let address = new Card("pin.png", "Address", "Level 6, 23 Pitt St, Sydney")
    let phoneNumber = new Card("phone.png", "Phone", "+61 9 211 3741")
    let email = new Card("message.png", "E-mail", "hey@halcyon.com.au")
    let contact_array = [address, phoneNumber, email]
    let contact = document.getElementById('contact');
    contact_array.forEach(
        function(element){
                let html = `<div class="contacts_block">
                <img src="${element.src}">
                <p class="contact_title">${element.title}</p>
                <p class="contact_text">${element.info}</p></div>`
                let crtDiv = document.createElement('div');
                crtDiv.innerHTML = html;
                contact.appendChild(crtDiv);
            })
}