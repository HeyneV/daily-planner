

var currentDay = $("#currentDay")
var saveBtn = $(".saveBtn")
currentDay.text(moment().format("LLL"));


saveBtn.on("click", save)

function save() {
    var id = $(this).attr("data-id")

    var text = $("#" + id).val()

    localStorage.setItem(id, text);

}

function loadData() {
    var militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    var currentHour = moment().hour()

    for (i = 0; i < 9; i++) {
        $("#" + i).val(localStorage.getItem(i))
        if (currentHour === militaryTime[i]) {
            $("#" + i).addClass("present")
        }
        if (currentHour > militaryTime[i]) {
            $("#" + i).addClass("past")
        }
        if (currentHour < militaryTime[i]) {
            $("#" + i).addClass("future")
        }
    }

}

loadData()




