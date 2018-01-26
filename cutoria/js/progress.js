function progressBarSim(al) {
        var bar = document.getElementById('progressBar');

        var status = document.getElementById('status');
            status.innerHTML = al+"%";
            bar.value = al;
            al ++;
        var sim =setTimeout("progressBarSim ("+al+")"300,);

        if(al==100){
            status.innerHTML="100%";
            bar.value =100;
            clearTimeout(sim);
            document.getElementById('finalMessage').innerHTML="process is complete";
        }
    }
    var amountLoaded=0;
    progressBarSim(amountLoaded);