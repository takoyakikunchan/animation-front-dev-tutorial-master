document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
});

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        console.log(this);
        window.setTimeout(function(){
            console.log(this); //このthisはwindowだが、それを
            this.el.classList.toggle('inview');//こっちのthisでelを参照できるように、elのオブジェクトであるTextAnimationをthisとして指定したい
        }.bind(this)); //関数の後にbindメソッドを記載することで、animateスコープの中のおthisはtextanimationを参照しているので、そっちが優先されるようになり、thisがTextAnimationになりエラー解消
       
    }

    animate() {
        const _that = this;
        window.setTimeout(function(){
            console.log(this); //このthisはwindowだが、それを
            _that.el.classList.toggle('inview');//こっちのthisでelを参照できるように、elのオブジェクトであるTextAnimationをthisとして指定したい
        }); //animateスコープの中のthisはtextanimationを参照しているので、そのthisを変数「_that」に格納して、使用する方法もある。
       
    }
}
