var tSize = 20;
var array = [9, 8, 4, 7, 6, 5, -1]; 
// add or remove elements ^

// the display array function uses the indices of the //swapping elements and then draws a line between them

var displayArray = function(array, iteration, k, j)
{
    textFont(createFont("georgia"));
    var len = array.length;
    fill(0, 0, 0);
    for(var i = 0; i < len; ++i)
    {
        textSize(tSize);
        textAlign(CENTER);
        if(i === j && iteration < len - 1)
        {
            fill(255, 0, 0);
        }
        else if(i === k - 1)
        {
            fill(15, 171, 57);
        }
        else
        {
            fill(0, 0, 0);
        }
text(array[i], i * (width/len), iteration * (height/len) + (height/(len*2)), width/len, height/len); 
    }
    
    var sizeX = (width/len)/2;
    var sizeY = (height/len)/2 + tSize;
    
    // drawing the lines
    if(iteration < len - 1)
    {
        stroke(242, 187, 5);
        line(j * (width/len) + sizeX, iteration * (height / len) + sizeY, k* (width/len) + sizeX, (iteration + 1) * (height/len) + sizeY - tSize);
    }
    
};

var selectionSort = function(array) 
{
    var len = array.length;
    for(var i = 0; i < len; i++)
    {
        var minIndex = i;
        for(var j = i + 1; j < len; j++)
        {
            if(array[j] < array[minIndex])
            {
                minIndex = j;
            }
        }
            displayArray(array, i , i, minIndex);
            var temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
    }
};

selectionSort(array);


