		    // Array
		imag = new Array("0.gif","1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif","11.gif","12.gif",
		                 "13.gif","14.gif","15.gif","0.gif")
		corretto = new Array("1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif", "8.gif", "9.gif", "10.gif",
						"11.gif", "12.gif", "13.gif", "14.gif", "15.gif", "0.gif")
		v = 16
		contamosse = 0
            // Spostamento imag
		function clik(n)
			{
			if ((v+4==n)||((n!=4)&&(n!=8)&&(n!=12)&&(v-1==n))||(v-4==n)||((n!=5)&&(n!=9)&&(n!=13)&&(v+1==n)))
				{
				document.images[n-1].src=imag[0]
				document.images[v-1].src=imag[n]
				m=imag[v]
				imag[v]=imag[n]
				imag[n]=m
				v=n
				contamosse++
				}
			}
			// Controllo 2 array
			function controllo(n) {
				a = new Array()
				for (var i = 0; i < 16; i++) {
					a.push(document.images[i].getAttribute("src"))
				}
				controllaDueArray(a, contamosse)
			}			
			// Mischiare
			function Mischia () {
	
				for (i=0; i<16; i++) { 
					a = Math.floor(16 * Math.random())
					b = Math.floor(16 * Math.random())
				if (a!=0 && b!=0) {
					document.images[a-1].src=imag[b]
					document.images[b-1].src=imag[a]
					m=imag[b] 
					imag[b]=imag[a]
					imag[a]=m
					
				}
			}
		}		
			// Numero Mosse
			function ContaMosse () {
		             alert("numero mosse: " + contamosse) 
	}
			// Tempoo
			var c = 0;
			var t;
			var timer_is_on = 0;
			// Tempo
			function timedCount() {
					document.getElementById("btn12").value = c;
					c = c + 1;
					t = setTimeout(timedCount, 1000);
			}
			// Inizio Tempo
			function startCount() {
			if (!timer_is_on) {
				timer_is_on = 1;
				timedCount();
			}
			}
			// Stop Tempo
			function stopCount() {
			         clearTimeout(t);
					timer_is_on = 0;
			}
			// Vittoria
			function controllaDueArray(a, c) {
				if (arraysEqual(a, corretto) === true) {
					alert("hai vinto con: " + contamosse + " Mosse")		
			}}
			function arraysEqual(a, b) {
					if (a === b) return true;
					if (a == null || b == null) return false;
					if (a.length !== b.length) return false;
				
					for (var i = 0; i < a.length; ++i) {
						if (a[i] !== b[i]) return false;
					}
					return true;
		} 