function box()
{
      var p = document.getElementById("display_area");
      var c = document.createElement("IMG");
      var num = parseInt(document.getElementById("box").value);
      var child = p.childNodes;
      var n = child.length;
      var nc = (n+1).toString(10);
      var fname = nc+".png";
      c.src = fname;
      c.height = 100;
      c.width = 100;
      if(n<num)
      {
            p.appendChild(c);
            n++;
      }
      else if(n>num)
      {
            p.removeChild(child[n-1]);
            n--;
      }
      if(n!==num)
      {
            setTimeout(box,1000);
      }
}