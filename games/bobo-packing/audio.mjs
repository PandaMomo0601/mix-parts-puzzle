export class AudioDirector {
  constructor(settings){this.settings=settings;this.ctx=null;this.music=new Audio('./assets/bobo-groove.m4a');this.music.loop=true;this.music.volume=.27;this.unlocked=false;this.lastPop=0;}
  async unlock(){try{this.ctx??=new (window.AudioContext||window.webkitAudioContext)();await this.ctx.resume();this.unlocked=true;this.sync();}catch{}}
  sync(){if(this.unlocked&&this.settings.music&&!document.hidden)this.music.play().catch(()=>{});else this.music.pause();}
  tone(freq,duration,type='sine',gain=.08,delay=0,slide=1){if(!this.ctx||!this.settings.sfx||document.hidden)return;const t=this.ctx.currentTime+delay,o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,t);o.frequency.exponentialRampToValueAtTime(Math.max(30,freq*slide),t+duration);g.gain.setValueAtTime(.001,t);g.gain.exponentialRampToValueAtTime(gain,t+.009);g.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(g);g.connect(this.ctx.destination);o.start(t);o.stop(t+duration+.01);}
  click(){this.tone(440,.11,'sine',.07,0,1.5);this.tone(160,.07,'triangle',.06);}
  pop(combo=0){if(!this.ctx||this.ctx.currentTime-this.lastPop<.055)return;this.lastPop=this.ctx.currentTime;const notes=[523.25,587.33,659.25,783.99,880,1046.5];this.tone(notes[combo%6],.09,'sine',.042,0,.82);}
  packed(combo=0){[0,4,7].forEach((n,i)=>this.tone(523.25*2**((n+(combo%3)*2)/12),.22,'triangle',.045,i*.045));this.tone(95,.13,'sine',.06,0,.5);}
  win(){[0,4,7,12,7,12,16].forEach((n,i)=>this.tone(523.25*2**(n/12),.35,'triangle',.07,i*.095));}
  fail(){this.tone(240,.3,'triangle',.06,0,.6);this.tone(170,.3,'sine',.05,.18,.7);}
  pause(){this.music.pause();this.ctx?.suspend().catch(()=>{});}
}
