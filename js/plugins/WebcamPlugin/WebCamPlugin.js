
import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


// define the component 
export class WebcamPlugIn extends LitElement {
  
  static properties = {
    picturesrc: {type: String}     
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Webcam Plugin',
      fallbackDisableSubmit: false,
      groupName: 'Media Player',
      version: '1.2',
      properties: {
        picturesrc: {
          type: 'string',
          title: 'Picture Source URL',
          description: 'Save the url img'
        }        
      }
    };
  }


  checkAdress() {
             
      
      return html`
                
                <div id="camera" style="height:auto;width:auto; text-align:left;"></div>

                <!--FOR THE SNAPSHOT-->
                <input type="button" value="Take a Snap" id="btPic" onclick="takeSnapShot()" /> 
                <p id="snapShot"></p>
                          
      `;  
    
  }     
  

  
  constructor() {
    super();
    this.checkAdress(); 
    
  }


  headerTemplate() {
    return html` 
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.25/webcam.js" integrity="sha384-pshkCKoXlfHSwsgXYXsPQ59N7JMM2Mm5iIo4VGj6SZiR60kxJ0IdyWtKVHYJ43pd" crossorigin="anonymous"></script>
                  <script src="https://127.0.0.1:8081/WebcamPlugin/src/script.js" ></script>
              
                `;
  }

  footerTemplate() {
   
  }
  

  

  render() {        

    
    return html`       
        
           ${this.headerTemplate()}
           ${this.checkAdress()}            
           ${this.footerTemplate()}
          
      
    `;     

  }
  
}

// registering the web component
const elementName = 'webcamplugin-plugin';
customElements.define(elementName, WebcamPlugIn);