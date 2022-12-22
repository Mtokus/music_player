class Music {
    constructor(title,singer,img,file) {
      this.title = title;
      this.singer = singer;
      this.img = img ;
      this.file = file ;
    }
    getName (){
      return this.title + " - " + this.singer;
    }
  }
  const musicList = [
    new Music ("Kaybolan Yıllar","Sezen Aksu","aksu.jpg","sez.mp3"),
    new Music ("Ihlamurlar Altında","İntizar","intizar.jpg","int.mp3"),
    new Music ("Gül Rengi","Mustafa Ceceli","ceceli.jpg","cece.mp3"),
  ];
