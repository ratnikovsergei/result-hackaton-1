import {Module} from '../core/module'

export class ClicksModule extends Module {
  stop(){
    stopTimer();
  }
  trigger(){
    createTimer();
  }
}
  let stopId = null;
  function stopTimer(){
    document.querySelector("form") ? document.querySelector('form').remove() : 1;
    document.querySelector("div") ? document.querySelector('div').remove() : 1;
    clearInterval(stopId);
  }
  function createTimer(){
    const form = document.createElement('form'),
          label = document.createElement('label'),       
          seconds = document.createElement('input'),
          start = document.createElement('button');  
    document.body.append(form);
  
    form.append(label, seconds, start);
    form.className = 'frm';
    form.style.cssText = 'display: block; width: 10%; margin-bottom: 0; margin-right: auto; margin-left: 80%; padding: 25px; padding-bottom: 10px; color: white; background: #5B3C67'; 
  
    label.textContent = 'Введите число секунд';
    label.className = 'lb';
    label.style.cssText = 'text-align: center; margin-bottom: 10px';
  
    seconds.className = 'inp';
    seconds.style.cssText = 'margin: 10px; width: 80%; padding: 10px; text-align: center; font-size: 16pt; border: 1px solid #ff8c00';
    seconds.setAttribute('type', 'number');
    seconds.setAttribute('placeholder', '0');
    seconds.setAttribute('required', '');
    seconds.setAttribute('autofocus', '');
    seconds.setAttribute('max', '1111');
    seconds.setAttribute('min', '0');
  
    start.textContent = 'ПУСК';
    start.className = 'btn';
    start.style.cssText = 'margin: 10px; padding: 10px; width: 80%; height: 45px; font-size: 16pt; color: white; background: #7F113E; border: 1px solid #F5C4AB';  
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();    
      let t = e.target[0].value;
      startTimer(t);
      seconds.setAttribute('disabled', '');            
    });  
  }            
  
  function startTimer(t){
    const wrapper = document.createElement('div');
    wrapper.className = 'box';
    wrapper.style.cssText = 'display: block; width: 10%; margin-top: 0; margin-right: auto; margin-left: 80%; padding: 25px; padding-top: 10px; color: white; background: #5B3C67'; 
    
    const time = document.createElement('span');
    time.className = 'tm';
    time.style.cssText = 'margin: 7%; text-align: center; font-size: 20pt; font-weight: 800; color: black';
    
    const timer = document.createElement('span');
    timer.className = 'tr';
    timer.style.cssText = 'margin: 7%; text-align: center;font-size: 20pt; font-weight: 800';  
    
    document.body.append(wrapper);
    wrapper.append(timer, time);
    stopId = setInterval(updateTime, 1000);
  
    function updateTime() {
      t--;
      timer.textContent = t;
      const now = new Date();
      time.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;    
      if(t <= 0){
        document.getElementsByTagName('form')[0].remove();
        wrapper.remove()               
        clearInterval(stopId);
      }
    }
  }
