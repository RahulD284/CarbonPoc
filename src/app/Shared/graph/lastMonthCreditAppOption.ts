export default {
    title: 'Last Month Credit Application Status',
    axes: {
      left: {
        mapsTo: 'value'
      },
      bottom: {
        mapsTo: 'key',
        scaleType: 'labels'
      }
    },
    donut: {
      center: {
        label: 'Browsers'
      },
      alignment: 'center'
    },
    height: '300px'
  }