d3.xml("t.svg",
        function(error, xml) {
    if (error) {console.log(error); return;}
            document.body.appendChild(xml.documentElement);
                 i=-1;
                 b=[];

     d3.selectAll('path.tel')
       .style("fill", "red")
       .on("mouseover", function(d) {
          {
         d3.select(this).style("fill", "blue");
       }
          // d3.selectAll("b").text(d3.select(this).attr('name'));
       })
       .on("click", function(d) {
        //alert("hi");

        d3.select(this).style("fill", "red");
        i++;
        //alert(
          a=d3.select(this).attr('name');

           var svgContainer = d3.select(this);
             var me = svgContainer.node();
           var x1 = me.getBBox().x + me.getBBox().width/2;
					var y1 = me.getBBox().y + me.getBBox().height/2;

      //    x1=round(x1,0);
  //  alert(typeof(x1)+":"+y1);

          d3.select('svg')
          .transition()
             .attr("transform","translate("+(500-x1/2)+","+(500-y1)+")scale(1.5,1.5)");
        //);
        b.push(a);
      //  alert(b);


        d3.selectAll("b").text(b);

       })
       .on("mouseout", function(d) {

        // if(t!=1)
         {
         d3.select(this).style("fill", "lightgreen")
       }
          //   d3.selectAll("b").text("none")

       });

  });
