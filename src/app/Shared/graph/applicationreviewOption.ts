export default {
  title: 'Annual Review Due',
  axes: {
    left: {
      mapsTo: 'value',
      scaleType: 'linear',
      title: 'Total Applications'
    },
    right: {
      mapsTo: 'value',
      scaleType: 'linear',
      title: 'Review pending',
      correspondingDatasets: [
        'Applications Review Pending'
      ]
    },
    bottom: {
      title: 'Months',
      mapsTo: 'key',
      scaleType: 'labels'
    }
  },
  comboChartTypes: [
    {
      type: 'simple-bar',
      correspondingDatasets: [
        'Total Applications'
      ]
    },
    {
      type: 'line',
      options: {
        points: {
          radius: 5
        }
      },
      correspondingDatasets: [
        'ReviewPending'
      ]
    },
    {
      type: 'line',
      options: {
        points: {
          radius: 3
        }
      },
      correspondingDatasets: [
        'ReviewDone'
      ]
    },
 
  ],
  height: '300px'
}