function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
        let url;
        
        try {
          url = new URL(inputText);
          console.log(url);
        } 
        catch (e) {
          return false;  
        }
      
        return url.protocol === "http:" || url.protocol === "https:";
      }


export { checkForName }
