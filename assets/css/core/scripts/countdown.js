var _0x4c4d=["tick","update","getTime","interval","00:00:00","floor","text","start","duration","concat","active"];!function(x){!function(c){for(;--c;)x.push(x.shift())}(252)}(_0x4c4d);var _0x2cbc=function(c,x){return _0x4c4d[c-=0]};function Countdown(_,c,x,a){this[_0x2cbc("0x1")]=!0,this[_0x2cbc("0x5")]=null,this[_0x2cbc("0x2")]=1e3,this.duration=new Date(x)[_0x2cbc("0x4")]()-new Date(c)[_0x2cbc("0x4")]();var i=this;this[_0x2cbc("0x9")]=function(){i[_0x2cbc("0x5")]=setInterval(function(){i.update()},i[_0x2cbc("0x2")])},this[_0x2cbc("0x3")]=function(){if(!0!==i[_0x2cbc("0x1")]||i[_0x2cbc("0xa")]<=0)return clearInterval(i[_0x2cbc("0x5")]),void a();i[_0x2cbc("0xa")]-=i.tick;var c=i[_0x2cbc("0xa")],x=(Math.floor(c%1e3/100),Math[_0x2cbc("0x7")](c/1e3%60)),t=Math[_0x2cbc("0x7")](c/6e4%60),n=Math[_0x2cbc("0x7")](c/36e5%24),t=t<10?"0"+t:t,x=x<10?"0"+x:x;0<=(n=n<10?"0"+n:n)&&0<=t&&0<=x&&$(_)[_0x2cbc("0x8")](""[_0x2cbc("0x0")](n,":")[_0x2cbc("0x0")](t,":")[_0x2cbc("0x0")](x))},this.stop=function(){clearInterval(i[_0x2cbc("0x5")]),$(_)[_0x2cbc("0x8")](_0x2cbc("0x6"))}}