    function readTextFile(file)
    {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function ()
      {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                text = allText;
            }
        }
      }
      rawFile.send(null);
    }
    
    function factorial(num,min)
    {
      if(num == min)
        return 1;
      return num * factorial(num-1,min);
    }