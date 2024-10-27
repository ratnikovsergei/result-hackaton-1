import {Module} from '../core/module'

export class ClicksModule extends Module {
  stop(){
    document.querySelector('div') ? document.querySelector('div').remove(): 1;
    window.alert = console.log('stop');
  }
  trigger(){
    let clicks = 0, dblclicks = 0, offset = 0, step = 1;
  
    const square = document.createElement('div');
    square.style.cssText = 'background: khaki; margin: 100px; width: 100px; height: 100px; display: flex';
    document.body.append(square);
  
    const h2 = document.createElement('h2');
    h2.textContent = '';
    h2.style.cssText = 'margin: auto; color: green; font-size: 22px; font-weight: bold';
    square.append(h2);
  
    square.addEventListener('click', e => {
      clicks++;
      h2.textContent = clicks + dblclicks;      
    });  
    square.addEventListener('dblclick', e => {
      dblclicks++;
      h2.textContent = clicks + dblclicks;      
    });
  
    function moveSquare() {
      if(offset  >= window.innerWidth - 130) step = -1;
      if(offset  <=0) step = 1;
      offset +=step;
      square.style.marginLeft = offset + "px";    
      window.requestAnimationFrame(moveSquare);
    }
    window.requestAnimationFrame(moveSquare);
  
    let id = setTimeout(() => {
      alert(`Вы успели кликнунь ${clicks + dblclicks} раз`);
      square.remove();
      clicks = 0;
      dblclicks = 0;
      clearTimeout(id);        
    }, 5000);   
  }  
}
