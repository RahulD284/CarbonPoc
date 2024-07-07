export default {
    title: 'Credit Application Status',
    data: {
      selectedGroups: [
        'Dataset 1',
        'Dataset 3'
      ]
    },
    axes: {
      left: {
        mapsTo: 'value'
      },
      bottom: {
        scaleType: 'labels',
        mapsTo: 'key'
      }
    },
    height: '300px'
  }