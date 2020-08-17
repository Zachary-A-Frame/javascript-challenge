console.log(data[1])


for (i = 0; i < data.length; i++) {
     let tbody = d3.select("tbody")
     let row = tbody.append("tr")
     row.append("td").text(data[i].datetime)
     row.append("td").text(data[i].city);
     row.append("td").text(data[i].state);
     row.append("td").text(data[i].country);
     row.append("td").text(data[i].shape);
     row.append("td").text(data[i].durationMinutes);
     row.append("td").text(data[i].comments);
}


let button = d3.select("button")
let form = d3.select(`form`)

form.on(`submit`, runEnter)
button.on(`click`, runEnter)

function runEnter() {
     d3.select("tbody").remove()
     d3.select("table").append("tbody")

     d3.event.preventDefault()

     let inputElement = d3.select(`.form-control`)

     let inputValue = inputElement.property("value")

     let filteredDates = data.filter(function (date) {
          return date.datetime == inputValue
     })

     for (i = 0; i < filteredDates.length; i++) {
       let tbody = d3.select("tbody");
       let row = tbody.append("tr");
       row.append("td").text(filteredDates[i].datetime);
       row.append("td").text(filteredDates[i].city);
       row.append("td").text(filteredDates[i].state);
       row.append("td").text(filteredDates[i].country);
       row.append("td").text(filteredDates[i].shape);
       row.append("td").text(filteredDates[i].durationMinutes);
       row.append("td").text(filteredDates[i].comments);
     }
}

