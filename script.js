const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price")
	let totalAmount =0;
	for(let i =0;i<prices.length;i++){
		totalAmount+=parseInt(prices[i].innerHTML)
	}
	const r0w=document.createElement('tr')
	const td=document.createElement('td')
	td.innerHTML=`TotalAmount ${totalAmount}`
	td.colspan=2;
	td.style.fontWeight='bold'

	row.appendChild(td)
	table.appenChild(row)
};

getSumBtn.addEventListener("click", getSum);

