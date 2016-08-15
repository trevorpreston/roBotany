console.log('connected')

$(function(){
  let checkCount = 0
  let bannerTimer
  let nextWaterDate=$('#nextWaterDate').text()
  let futureWaterDate


  initiateBannerTimer()
  console.log('next watering datetime is ' + nextWaterDate)

  function checkWaterStatus(){
    let $wateringInterval = parseInt($('#waterFreq').text());
    let currentDateTime = new Date();
    currentDateTime.setSeconds(00);
    currentDateTime = currentDateTime.toString();
    console.log('checking current datetime...');
    console.log('current datetime is ' + currentDateTime +'. the watering time is ' + nextWaterDate);
    if ((checkCount === 0) && (currentDateTime == nextWaterDate)){
      checkCount = 1;
      updateBannerTimer()
      console.log('watering plant.');
      console.log('interval found.  syncing banner timer')
      console.log('adding ' + $wateringInterval + ' minutes to timer')
      wateringNowStatus();
      nextWaterDate = new Date(nextWaterDate)
      calculateNextWaterTime($wateringInterval, currentDateTime);
    } else if (currentDateTime == nextWaterDate){
      console.log("watering plant.  current check count is " + checkCount);
      console.log('adding ' + $wateringInterval + ' minutes to timer')
      wateringNowStatus();
      calculateNextWaterTime($wateringInterval, currentDateTime);
    } else {
      console.log(".")
    }
  }

  function calculateNextWaterTime(waterInt, currentTime){
    let fluidTime = new Date(currentTime);
    fluidTime.setMinutes(fluidTime.getMinutes() + waterInt);
    nextWaterDate  = fluidTime;
    console.log('updating status banner to next watering date: ' + nextWaterDate);
    setTimeout(function(){
      renderNewWaterTime(nextWaterDate)
    }, 7000);
  }

  function wateringNowStatus(){
    $('#statusBanner').css('background-color', '#A3FF85');
    $('#bannerInfo').text('')
    $('#nextWaterDate').text('watering now')
  }

  function renderNewWaterTime(newTime){
    $('#statusBanner').css('background-color', '#6BDAFF');
    $('#bannerInfo').text('Next watering scheduled for ')
    $('#nextWaterDate').text(newTime)
  }

  function initiateBannerTimer(){
    bannerTimer = setInterval(checkWaterStatus, 1000);
  }

  function updateBannerTimer(){
    clearInterval(bannerTimer);
    bannerTimer = setInterval(checkWaterStatus, 60*1000)

  }





})
