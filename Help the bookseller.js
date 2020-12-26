
//https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
//HarshitJoshi9152 2:08pm 6/7/2020 mm/dd/yyyy


function stockList(listOfArt, listOfCat) {
	if (listOfCat.length === 0 || listOfArt.length === 0) {
		return "";
	}

	const count = {};
	for (let i of listOfCat) {
		count[i] = 0;
	}

	listOfArt.forEach( (val, index) => {
		let category = val.slice(0, 1)
		let Q = val.split(' ')[1] // quantity
		if (category in count) {
			count[category] += +Q;
		}
	})
	let template = '';
	for (let i of Object.entries(count)) {
		console.log(i)
		template += `(${i[0]} : ${i[1]})`
	}
	template = template.split(")(").join(") - (")
	return template
}


// TESTS

const log = console.log

let b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
let c = ["A", "B", "C", "W"]

log(stockList(b, c))

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]

log(stockList(b, c))
