window.onload = function(){
	var cLi = document.getElementById('tabs').getElementsByTagName('li');
	var cList = document.getElementById('list-box').getElementsByClassName('list');
	
	for(var i=0 ;i<cLi.length;i++){
		cLi[i].index=i;
		cLi[i].onclick = function(){
			for(var i=0;i<cLi.length;i++){
				cLi[i].className = '';
				cList[i].style.display = 'none';
			}
			this.className = 'active';
			cList[this.index].style.display = 'block';
		}
	}

}
