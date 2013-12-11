function jauge() {
  /*Graph project*/    
  var graphProjet = document.querySelectorAll('.campaign-amount-stat');

  // Create element graph
  for (var i = 0; i < graphProjet.length; i++) {
    var divContent = document.createElement('div'),
        percent = graphProjet[i].getAttribute("data-percent"),
        textContent = document.createTextNode(percent + '%');
        
        divContent.appendChild(textContent);
        divContent.className = 'projectGraph';
    
    
    for(var j = 1; j <=4; j ++) {
      var arc = document.createElement('div'),
          spanArc = document.createElement('span');
      
      arc.className = 'arc'+j;
      spanArc.className = 'spanArc'+j;
      arc.appendChild(spanArc);
      divContent.appendChild(arc);
    } 
    
    // Append Element
    graphProjet[i].appendChild(divContent);
    
    
    //Calcul 
    var arc1 = document.querySelector(".arc1"),
        arc2 = document.querySelector(".arc2"),
        arc3 = document.querySelector(".arc3"),
        arc4 = document.querySelector(".arc4"),
        spanArc1 = document.querySelector(".spanArc1"),
        spanArc2 = document.querySelector(".spanArc2"),
        spanArc3 = document.querySelector(".spanArc3"),
        spanArc4 = document.querySelector(".spanArc4");
                
    if(percent == 0) {
      var deg = 0;
    }else {
      var deg = Math.round((90*percent)/25);
    }
    
    
    //Function prefix
    function arcPrefix(element, degValue) {
      element.style.webkitTransform = "rotate("+degValue+"deg)";
      element.style.MozTransform = "rotate("+degValue+"deg)";
      element.style.msTransform = "rotate("+degValue+"deg)";
      element.style.OTransform = "rotate("+degValue+"deg)";
      element.style.transform = "rotate("+degValue+"deg)";
    }
    
    
    if(percent<=25) { 
    
      arcPrefix(arc1, deg);
      
      spanArc1.style.borderColor = '#26aadd';
      
    }else if(percent<=50) {
    
      deg = 90 + deg;
      
      arcPrefix(arc1, 90);
      arcPrefix(arc2, deg);
      
      spanArc1.style.borderColor = '#26aadd';
      spanArc2.style.borderColor = '#26aadd';

    }else if(percent<=75) {
      
      deg = 180 + deg;
      
      arcPrefix(arc1, 90);
      arcPrefix(arc2, 180);
      arcPrefix(arc3, deg);
      
      spanArc1.style.borderColor = '#26aadd';
      spanArc2.style.borderColor = '#26aadd';
      spanArc3.style.borderColor = '#26aadd';
      
    }else if(percent<=100) {
      
      deg = 240 + deg;
      
      arcPrefix(arc2, 90);
      arcPrefix(arc2, 180);
      arcPrefix(arc3, 270);
      arcPrefix(arc4, deg);
      
      spanArc1.style.borderColor = '#26aadd';
      spanArc2.style.borderColor = '#26aadd';
      spanArc3.style.borderColor = '#26aadd';
      spanArc4.style.borderColor = '#26aadd';

    }else {
      console.log('error');
    }
  }
}
