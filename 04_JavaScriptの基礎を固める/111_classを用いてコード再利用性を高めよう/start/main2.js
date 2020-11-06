document.addEventListener('DOMContentLoaded', function () {
  
 

  const str2 = el2.innerHTML.trim().split("");
  
  // let concatStr = '';

  // for(let c of str) {
  //     c = c.replace(/\s+/, '&nbsp;');
  //     concatStr += `<span class="char">${c}</span>`;
  // }

  el.innerHTML = str.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
  }, "");
  el2.innerHTML = str2.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
  }, "");
});

class Text{
  constructor(el){
  this.el = document.querySelector(el);
  this.chars = el.innerHTML.trim().split("");
  this.el.innerHTML = this._split();
  }
  _split(){this.chars.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
}, "");
  }
}
const ta = new Text('.animate-title');
const ta = new Text('.animate-title-2');
ta.log();