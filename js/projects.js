// Create a class for the element
class Projects extends HTMLElement {
    constructor() {
      super();
  
      // attribute content 
      const title       = this.getAttribute('title');
      const img    = this.getAttribute('img');    
      const url      = this.getAttribute('url');    
      const url_github      = this.getAttribute('url_github');    
      const description = this.getAttribute('description');        
  
      this.innerHTML = `
          <div class="card">
            <h5 class="card-header text-center">${title}</h5>
            <div class="text-center">
            <a href="${url}" target="_blank"><img src="${img}" style="width:50%;" class="card-img-top" alt="..."></a>
            </div>
            <div class="card-body">
              <h5></h5>
                  <p class="card-text">
                  <table class="table">
                      <tr>
                          <td class="text-success font-weight-bold">Repositorio:</td>
                          <td><a href="${url_github}" target="_blank">${url_github}</a></td>
                      </tr>
                      <tr>
                          <td class="text-success font-weight-bold">Description:</td>
                          <td>${description}</td>
                      </tr>
                  </table>
                  </p>
            </div>
          </div>
          <br>
          <div class="card" >
    <div class="card-body">
      <h1 class="card-title">Contacto</h1>
      <p class="card-text">Victor Manuel Oltra Sanchez.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Favor de enviar correo electrónico a: <a href="mailto:voltranew@hotmail.com">voltranew@hotmail.com</a></li>
      <li class="list-group-item">Username GitHub: voltranewi</li>
    </ul>
    <div class="card-body">
        Link GitHub principal: <a href="http://www.linkedin.com/in/victor-oltra-5837733b" target="_blank" class="card-link">http://www.linkedin.com/in/victor-oltra-5837733b</a>
    </div>
  </div>
      `;    
  
    }
  }
  
  // Define the new element
  customElements.define('card-projects', Projects);
  