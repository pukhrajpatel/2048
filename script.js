var box = document.getElementsByClassName("num")


const it0 = Math.floor(Math.random()*box.length);
const it2 = Math.floor(Math.random()*box.length);
box[it0].innerHTML = 2;
box[it2].innerHTML = 2;

var values = [].map.call(box, function(e) {
  return e.innerHTML;
});
//console.log(values)

/*for(i = 0; i<box.length; i++){
	console.log(box[i].innerHTML);
}*/
/*
2 - hsl(60, 25%, 90%)
4 - hsl(35, 68%, 84%)
8 - hsl(36, 71%, 53%)
16 - hsl(32, 95%, 53%)
32 - hsl(8, 95%, 53%)
64 - hsl(150, 35%, 45%)
128 - hsl(150, 88%, 52%)
256 - hsl(220, 64%, 76%)
512 - hsl(220, 83%, 46%)
1024 - hsl(60, 59%, 44%)
2048 - hsl(60, 98%, 54%)
*/

ar = []
res = []
for(i = 0; i<values.length; i++){
	var c = parseInt(values[i])
	if(isNaN(c)){
		ar.push(0)
	}
	else ar.push(c);
	if((i+1)%4 == 0){
		res.push(ar)
		ar = []
	}
}
//console.log(res)
document.addEventListener('keypress', (event) => {
  var name = event.key;
  ar2 = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
  //console.log(ar2)
  if(name == '8'){
  	for(j = 0; j<4; j++){
  		k = 0;
  		i = 0;
  		while(i<4 && res[i][j] == 0){
			i++;
		}
		if(i == 4) continue;
		if(i == 3){
			ar2[k][j] = res[i][j];
			continue;
		}
		i0 = i;
		i++;
  		for(; i<4; i++){
  			while(i<4 && res[i][j] == 0){
  				i++;
  			}
  			if(i == 4){
  				ar2[k][j] = res[i0][j];
  				break;
  			}
  			if(res[i0][j] == res[i][j]){
  				ar2[k][j] = 2*res[i][j];
  				i++;
  				while(i<4 && res[i][j] == 0) i++;
  				i0 = i;
  				if(i0 == 3){
  					k++;
  					ar2[k][j] = res[i][j];
  				}
  			}
  			else{
  				ar2[k][j] = res[i0][j];
  				i0 = i;
  				if(i0 == 3){
  					k++;
  					ar2[k][j] = res[i][j]
  				}
  			}
  			k++;
  		} 
  	}
  }
  else if(name == '6'){
  	for(i = 0; i<4; i++){
  		k = 3;
  		j = 3;
  		while(j>=0 && res[i][j] == 0){
			j--;
		}
		if(j == -1) continue;
		if(j == 0){
			ar2[i][k] = res[i][j];
			continue;
		}
		j0 = j;
		j--;
  		for(; j>=0; j--){
  			while(j>=0 && res[i][j] == 0){
  				j--;
  			}
  			if(j == -1){
  				ar2[i][k] = res[i][j0];
  				break;
  			}
  			if(res[i][j0] == res[i][j]){
  				ar2[i][k] = 2*res[i][j];
  				j--;
  				while(j>=0 && res[i][j] == 0) j--;
  				j0 = j;
  				if(j0 == 0){
  					k--;
  					ar2[i][k] = res[i][j];
  				}
  			}
  			else{
  				ar2[i][k] = res[i][j0];
  				j0 = j;
  				if(j0 == 0){
  					k--;
  					ar2[i][k] = res[i][j]
  				}
  			}
  			k--;
  		} 
  	}
  }
  else if(name == '2'){
  	for(j = 0; j<4; j++){
  		k = 3;
  		i = 3;
  		while(i>=0 && res[i][j] == 0){
			i--;
		}
		if(i == -1) continue;
		if(i == 0){
			ar2[k][j] = res[i][j];
			continue;
		}
		i0 = i;
		i--;
  		for(; i>=0; i--){
  			while(i>=0 && res[i][j] == 0){
  				i--;
  			}
  			if(i == -1){
  				ar2[k][j] = res[i0][j];
  				break;
  			}
  			if(res[i0][j] == res[i][j]){
  				ar2[k][j] = 2*res[i][j];
  				i--;
  				while(i>=0 && res[i][j] == 0) i--;
  				i0 = i;
  				if(i0 == 0){
  					k--;
  					ar2[k][j] = res[i][j];
  				}
  			}
  			else{
  				ar2[k][j] = res[i0][j];
  				i0 = i;
  				if(i0 == 0){
  					k--;
  					ar2[k][j] = res[i][j]
  				}
  			}
  			k--;
  		} 
  	}
  }
  else if(name == '4'){
  	for(i = 0; i<4; i++){
  		k = 0;
  		j = 0;
  		while(j<4 && res[i][j] == 0){
			j++;
		}
		if(j == 4) continue;
		if(j == 3){
			ar2[i][k] = res[i][j];
			continue;
		}
		j0 = j;
		j++;
  		for(; j<4; j++){
  			while(j<4 && res[i][j] == 0){
  				j++;
  			}
  			if(j == 4){
  				ar2[i][k] = res[i][j0];
  				break;
  			}
  			if(res[i][j0] == res[i][j]){
  				ar2[i][k] = 2*res[i][j];
  				j++;
  				while(j<4 && res[i][j] == 0) j++;
  				j0 = j;
  				if(j0 == 3){
  					k++;
  					ar2[i][k] = res[i][j];
  				}
  			}
  			else{
  				ar2[i][k] = res[i][j0];
  				j0 = j;
  				if(j0 == 3){
  					k++;
  					ar2[i][k] = res[i][j]
  				}
  			}
  			k++;
  		} 
  	}
  }
  else{
  	return;
  }
  res = ar2;
  li = []
  for(i = 0; i<16; i++){
  	//console.log(Math.floor(i/4), " ", i%4)
  	if(ar2[Math.floor(i/4)][i%4] != 0){
  		box[i].innerHTML = ar2[Math.floor(i/4)][i%4];
  	}
  	else{
  		li.push(i);
  		box[i].innerHTML = "";
  	}
  }
  const it = li[Math.floor(Math.random()*li.length)]
  const it1 = 2*(Math.floor(Math.random()*2)+1)

  box[it].style.transition = "all 1s";
  box[it].innerHTML = it1;

  res[Math.floor(it/4)][it%4] = it1;
  //box[it].style.backgroundColor = "hsl(60, 98%, 54%)";

  for(i = 0; i<4; i++){
  	for(j = 0; j<4; j++){
  		if(ar2[i][j] == 2){
  			box[i*4+j].style.backgroundColor = "hsl(60, 25%, 90%)";
  		}
  		else if(ar2[i][j] == 4){
  			box[i*4+j].style.backgroundColor = "hsl(35, 68%, 84%)";
  		}
  		else if(ar2[i][j] == 8){
  			box[i*4+j].style.backgroundColor = "hsl(36, 71%, 53%)";
  		}
  		else if(ar2[i][j] == 16){
  			box[i*4+j].style.backgroundColor = "hsl(32, 95%, 53%)";
  		}
  		else if(ar2[i][j] == 32){
  			box[i*4+j].style.backgroundColor = "hsl(8, 95%, 53%)";
  		}
  		else if(ar2[i][j] == 64){
  			box[i*4+j].style.backgroundColor = "hsl(150, 35%, 45%)";
  		}
  		else if(ar2[i][j] == 128){
  			box[i*4+j].style.backgroundColor = "hsl(150, 88%, 52%)";
  		}
  		else if(ar2[i][j] == 256){
  			box[i*4+j].style.backgroundColor = "hsl(220, 64%, 76%)";
  		}
  		else if(ar2[i][j] == 512){
  			box[i*4+j].style.backgroundColor = "hsl(220, 83%, 46%)";
  		}
  		else if(ar2[i][j] == 1024){
  			box[i*4+j].style.backgroundColor = "hsl(60, 59%, 44%)";
  		}
  		else if(ar2[i][j] == 2048){
  			box[i*4+j].style.backgroundColor = "hsl(60, 98%, 54%)";
  		}
  		else if(ar2[i][j] == 4096){
  			box[i*4+j].style.backgroundColor = "hsl(60, 98%, 54%)";
  		}
  		else{
  			box[i*4+j].style.backgroundColor = "hsl(0, 0%, 85%)";
  		}
  	}
  }
}, false);

//console.log(res)
