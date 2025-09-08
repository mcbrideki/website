    var container = document.getElementById('stuff');
    var scrollAmount = 0;
    var scrollMin = 0
    var scrollMax = input.clientWidth

    document.getElementById('slide').onclick = function () {
      container.scrollTo({
        top: 0,
        left: Math.max(scrollAmount += 500, scrollMax),
        behavior: 'smooth'
      });
    };


    document.getElementById('slideBack').onclick = function () {
      container.scrollTo({
        top: 0,
        left: Math.min(scrollAmount -= 500, scrollMin),
        behavior: 'smooth'
      });
    };