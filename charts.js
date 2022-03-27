// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples;
    console.log(samplesArray);    
    // Create a variable that filters the samples for the object with the desired sample number.
    var selectedIdSamples = samplesArray.filter(data => data.id == sample);
    console.log(selectedIdSamples);    
    // Create a variable that holds the first sample in the array.
    var selectedIdSamples = samplesArray.filter(data => data.id == sample)
    var firstSample = selectedIdSamples[0];
    console.log(firstSample);
    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds = firstSample.otu_ids;
    var otuLabels = firstSample.otu_labels;
    var sampleValues = firstSample.sample_values;
    console.log(otuIds);
    console.log(otuLabels);
    console.log(sampleValues);   
    // 3. Create a variable that holds the washing frequency.
    var washFreq = +metadata_SelId[0].wfreq;
    // Create the yticks for the bar chart.
    var yticks = otuIds.slice(0,10).map(id => "OTU " + id).reverse();
    console.log(yticks);
    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar", barData, barLayout);

    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bar", barData, barLayout);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: washFreq,
        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per week"},
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: {
            range: [null, 10],
            tickmode: "array",
            tickvals: [0,2,4,6,8,10],
            ticktext: [0,2,4,6,8,10]
          },
          bar: {color: "black"},
          steps: [
            { range: [0, 2], color: "red" },
            { range: [2, 4], color: "orange" },
            { range: [4, 6], color: "yellow" },
            { range: [6, 8], color: "lime" },
            { range: [8, 10], color: "green" }]
        }
      }
    ];    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      autosize: true,
      annotations: [{
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        xanchor: 'center',
        y: 0,
        yanchor: 'center',
        text: "The gauge displays your belly button weekly washing frequency",
        showarrow: false
      }]
    };
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge" , gaugeData, gaugeLayout,{responsive: true});
  });
}

// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otuIds,
      y: sampleValues,
      text: otuLables,
      mode: "markers",
      marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: 'Earth',
      }
   
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures per Sample",
      xaxis: {title: "OTU ID"},
      yaxis: {title: "Sample Value"},
      titlefont: {"size": 25},
      hovermode: "closest",
      height: 500
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot(); 
  });
}
