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
          <div class="card ">
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
      `;    
  
    }
  }
  
  // Define the new element
  customElements.define('card-projects', Projects);
  