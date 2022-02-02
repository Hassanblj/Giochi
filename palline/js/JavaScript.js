var Immagini=new Array("imag/c.png","imag/c1.png")
var Immag=new Array("imag/c2.png","imag/c3.png")
var Imma=new Array("imag/c4.png","imag/c5.png")
var Imm=new Array("imag/c6.png","imag/c7.png")
var Im=new Array("imag/c8.png","imag/c9.png")
var I=new Array("imag/c10.png","imag/c11.png")
var M=new Array("imag/c.png","imag/c1.png")
var M1=new Array("imag/c2.png","imag/c3.png")
var M2=new Array("imag/c4.png","imag/c9.png")
var M3=new Array("imag/c6.png","imag/c11.png")
var T=new Array("imag/c8.png","imag/c5.png")
var T1=new Array("imag/c7.png","imag/c10.png")
    var x=0
    function Anima() {
			 if(x==0) 
				 x=1
			 else
				 x=0
			 
     document.images.p.src=Immagini[x]
	 document.images.p1.src=Immag[x]
	 document.images.p2.src=Imma[x]
	 document.images.p3.src=Imm[x]
	 document.images.p4.src=Im[x]
	 document.images.p5.src=I[x]
	 document.images.p6.src=M[x]
	 document.images.p7.src=M1[x]
	 document.images.p8.src=M2[x]
	 document.images.p9.src=M3[x]
	 document.images.p10.src=T[x]
	 document.images.p11.src=T1[x]
     setTimeout("Anima()",500)
    }
	
	 function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
	  function pause() { 
		audio.pause(); 
} 