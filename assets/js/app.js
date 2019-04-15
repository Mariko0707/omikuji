let btn = document.getElementById('btn');
let uranai = ['大吉','吉','中吉','小吉','凶','大大吉'];
let result = document.getElementById('result');
let bg = document.getElementsByClassName('result');
let luckyColor = ['京緋色','樺桜','若草色','花萌葱','勿忘草']
let bgColor = ['#FF251E',' #F56A29','C3D825','#88CB7F','#89C3EB'];

	//console.log ("大吉");
	btn.addEventListener('click',function(){

		let num = Math.floor(Math.random() * uranai.length);
		result.textContent = uranai[num]
			//console.log(uranai[num]);
			//console.log(Math.random());

		let color = Math.floor(Math.random() * luckyColor.length);
		console.log(color)
		result.textContent = luckyColor[color];

		bg[0].style.backgroundColor = bgColor[color];


		});
