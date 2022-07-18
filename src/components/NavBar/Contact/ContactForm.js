import './ContactForm.css'
const FilterExample = () => {
    return(
        <div>
         <div class="form-container">

<div class="contact-us">

    <h2>• ¡ Se parte de claramichi ! •</h2>
    <div class="underline"></div>
    <form action="#">
        <label for="customerName">NAME <em>&#x2a;</em></label><input id="customerName" name="customerName"
            required="" type="text" placeholder="Escribe tu nombre o apodo aqui" />

        <label for="customerEmail">EMAIL <em>&#x2a;</em></label><input id="customerEmail" name="customerEmail"
            required="" type="email" placeholder="Pon tu email aqui para que podamos contactarte" />

        <label for="customerPhone">ASUNTO DEL MENSAJE <em>&#x2a;</em></label><input id="customerPhone"
            name="subjectLine" required="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="text"
            placeholder="Dinos en qué tipo de comida se destaca el local" />

        <label for="orderNumber">DIRECCIÓN DEL LOCAL <em>&#x2a;</em></label><input id="orderNumber"
            name="subjectAddress" required="" type="text" placeholder="¿Dónde queda?" />

        <label for="customerNote">TU MENSAJE <em>&#x2a;</em></label><textarea id="customerNote"
            name="customerNote" required="" rows="4" placeholder="¡Cuéntanos todo del lugar!"></textarea>
        <h3>
            Si quieres recibir créditos o ser anónimo en la publicación puedes aclararlo en el mensaje.
        </h3>

        <button id="customerOrder">SUBMIT</button>
    </form>
</div>

</div>
        </div>
    )
    }
    
    export default FilterExample