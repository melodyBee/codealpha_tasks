function AgeTracking(event) {
    event.preventDefault()
    //current time
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth() + 1
    let currentDay = currentDate.getDate()
    // console.log(currentDate, currentYear, currentMonth, currentDay)
    //users date of birth
    var userAge = document.getElementById('userAge').value
    console.log(userAge)
    userAge = userAge.split('-')
    var userYear = parseInt(userAge[0])
    var userMonth = parseInt(userAge[1])
    var userDay = parseInt(userAge[2])
    // console.log(userYear, userMonth, userDay)
    //calculations
    let AgeYear = currentYear - userYear
    let AgeMonth = currentMonth - userMonth
    let AgeDate = currentDay - userDay
    // console.log(AgeYear, AgeMonth, AgeDate)
    if (AgeDate < 0) {
        AgeMonth--
        let daysInPrevMonth = new Date(currentYear, currentMonth - 1, 0).getDate()
        AgeDate = daysInPrevMonth + AgeDate
        // console.log(AgeDate + 'this is the renewed date')
        // console.log(AgeDate)
        // console.log('full age: ', AgeYear, AgeMonth, AgeDate)
        if (AgeMonth < 0) {
            AgeYear--
            AgeMonth += 12
            console.log('Full Age: ', AgeYear, AgeMonth, AgeDate)
            document.getElementById(
                'output'
            ).innerText = `You are ${AgeYear} years, ${AgeMonth} months, and ${AgeDate} days old.`
        }
    } else {
        console.log('else', AgeYear, AgeMonth, AgeDate)
        document.getElementById(
            'output'
        ).innerText = `You are ${AgeYear} years, ${AgeMonth} months, and ${AgeDate} days old.`
    }
}
