module.exports = {
  name: 'booking-desktop',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/booking/booking-desktop',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
