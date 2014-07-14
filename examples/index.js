var path = require('path');
var tesselWeiboRobot = require('..');
var robot = new tesselWeiboRobot();

robot
  .set('apikey', 'myApiKey')
  .set('defaultPicture', 'http://myDefaultSharingPic')
  .set('text', '通过 Tessel 每小时拍摄一张照片')
  .set('uploadDir', path.join(__dirname, 'pictures'))
  .takePicture(800, 600)
  .repeat('1hr')
  .start();